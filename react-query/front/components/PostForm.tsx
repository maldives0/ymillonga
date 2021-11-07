import React, { useState, useRef, useCallback } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import {
  InfiniteData,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { uploadImagesAPI, addPostAPI } from "../apis/post";
import { loadMyInfoAPI } from "../apis/user";
import Post from "../interfaces/post";
import User from "../interfaces/user";
import { AxiosError } from "axios";
import { backUrl } from "../config/config";

const PostForm = () => {
  const queryClient = useQueryClient();
  const { data: me } = useQuery<User>("user", loadMyInfoAPI);
  const [loading, setLoading] = useState(false);
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [text, onChangeText, setText] = useInput<string>("");
  const imageInput = useRef<HTMLInputElement>(null);
  const mutation = useMutation<Post, AxiosError, FormData>(
    "posts",
    addPostAPI,
    {
      onMutate() {
        if (!me) return;
        setLoading(true);
        queryClient.setQueryData<InfiniteData<Post[]>>("posts", (data) => {
          const newPages = data?.pages.slice() || [];
          newPages[0].unshift({
            id: 0,
            User: me,
            content: text,
            Images: imagePaths.map((v, i) => ({ src: v, id: i })),
            Comments: [],
            Likers: [],
            createdAt: new Date().toString(),
          });
          return {
            pageParams: data?.pageParams || [],
            pages: newPages,
          };
        });
      },
      onSuccess() {
        setText("");
        setImagePaths([]);
        queryClient.refetchQueries("posts");
      },
      onSettled() {
        setLoading(false);
      },
    }
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    // console.log('clickImgInfo', e.target.files);//선택한 이미지 파일 형식이 담겨있다(1개)
    const imageFormData = new FormData(); //멀티파트형식으로 백서버로 보낸다
    [].forEach.call(e.target.files, (f) => {
      //유사배열이므로 forEach method를 배열에서 빌려온다
      imageFormData.append("image", f); //백서버의 키 값과 'image' 일치시켜야 함
    });
    // uploadImagesAPI<string>(imageFormData).then((result)=>{
    //     setImagePaths(prev=> prev.concat(result)
    // )
    // })

    uploadImagesAPI<string>(imageFormData).then((result) => {
      setImagePaths((prev) => prev.concat(result));
    });
  }, []);

  const onRemoveImage = useCallback(
    (index: number) => () => {
      setImagePaths((prev) => {
        return prev.filter((v, i) => i !== index);
      });
    },
    []
  );

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) {
      return alert("게시글을 작성한 후 버튼을 누르세요.");
    }
    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append("image", p);
    });
    formData.append("content", text);
    mutation.mutate(formData);
  }, [text, imagePaths]);

  return (
    <Form
      style={{ margin: "10px 0 30px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Form.Item>
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          maxLength={140}
          placeholder="오늘은 어떤 일이 있었나요?"
          style={{
            height: "80px",
            marginBottom: "5px",
          }}
        />
        <div>
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
          <Button onClick={onClickImageUpload}>이미지 업로드하기</Button>
          <Button
            type="primary"
            style={{ float: "right" }}
            loading={loading}
            htmlType="submit"
          >
            게시하기
          </Button>
        </div>
        <div>
          {imagePaths.map((v, i) => {
            console.log("image", v);
            return (
              <div key={v} style={{ display: "inline-block" }}>
                <img
                  // src={v.replace(/\/thumb\//, "/original/")}
                  src={`${backUrl}/${v}`}
                  style={{ width: "200px" }}
                  alt={v}
                />
                <div>
                  <Button onClick={onRemoveImage(i)}>삭제하기</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form.Item>
    </Form>
  );
};
export default PostForm;
