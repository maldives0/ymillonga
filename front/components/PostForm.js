import React, { useRef, useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';
import useInput from '../hooks/useInput';
import { backUrl } from '../config/config';
const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector(state => state.post);
    const [text, onChangeText, setText] = useInput('');
    const dispatch = useDispatch();

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);
    const onChangeImages = useCallback((e) => {
        console.log('click image info', e.target.files);// 유사배열(배열 모양을 띄는 객체 형식)으로 반환됨
        const imageFormData = new FormData();//서버에 multipart형식으로 이미지를 보낼 수 있게 한다
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);//key=image,value=f, key가 서버 upload.array('image')와 같아야 한다
        });//e.target.files의 proto에 forEach 매서드가 없으므로 배열([])의 forEach 매서드를 빌려온다
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        });
    });
    const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index,
        });
    });

    //callback과 같은 hooks를 쓰면 action보다는 dispatch로 직접 데이터를 보내는 것이 더 편하다
    const onSubmit = useCallback(() => {
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요.');
        }
        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p);
            //image나 file형태가 아니면 multer가 text으로 취급해 req.body로 들어간다. req.body.image
        });
        formData.append('content', text);
        //req.body.content와 연결된다
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths]);

    return (
        <Form
            style={{ margin: '10px 0 20px' }}
            encType="multipart/form-data"
            onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 일이 있었나요?" />
            <div>
                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}>upload image</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">twit</Button>
            </div>
            <div>
                {imagePaths.map((v, i) => {
                    return (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={`${backUrl}/${v}`} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button
                                    onClick={onRemoveImage(i)}>delete</Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Form>
    );
};
export default PostForm;