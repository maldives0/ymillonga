import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

const PostForm = () => {

    const imagePaths = useSelector(state => state.post.imagePaths);
    const addPostLoading = useSelector(state => state.post.addPostLoading);
    const addPostDone = useSelector(state => state.post.addPostDone);
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');
    const imageInput = useRef();

    useEffect(() => {
        if (addPostDone) setText('');
    }, [addPostDone]);
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    const onChangeImages = useCallback((e) => {
        // console.log('clickImgInfo', e.target.files);//선택한 이미지 파일 형식이 담겨있다(1개)
        const imageFormData = new FormData();//멀티파트형식으로 백서버로 보낸다
        [].forEach.call(e.target.files, (f) => {//유사배열이므로 forEach method를 배열에서 빌려온다
            imageFormData.append('image', f);//백서버의 키 값과 'image' 일치시켜야 함
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        });
    }, []);


    const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index,
        });
    }, []);
    const onSubmit = useCallback(() => {
        if (!text || !text.trim()) {
            return alert('게시글을 작성한 후 버튼을 누르세요.');
        }
        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p);
        });
        formData.append('content', text);
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths]);
    return (
        <Form
            style={{ margin: '10px 0 30px' }}
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
                        height: '80px',
                        marginBottom: '5px'
                    }}
                />
                <div>
                    <input
                        type="file" name="image" multiple hidden
                        ref={imageInput}
                        onChange={onChangeImages} />
                    <Button onClick={onClickImageUpload}>이미지 업로드하기</Button>
                    <Button type="primary"
                        style={{ float: 'right' }}
                        loading={addPostLoading}
                        htmlType="submit">게시하기</Button>
                </div>
                <div>
                    {imagePaths.map((v, i) => {
                        return (
                            <div key={v} style={{ display: 'inline-block' }}>
                                <img
                                    src={v.replace(/\/thumb\//, '/original/')}
                                    style={{ width: '200px' }} alt={v} />
                                <div>
                                    <Button
                                        onClick={onRemoveImage(i)}>삭제하기</Button>
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