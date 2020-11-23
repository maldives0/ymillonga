import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';

import useInput from '../hooks/useInput';
import { ADD_POST_REQUEST } from '../reducers/post';


const PostForm = () => {
    const { imagePaths, addPostLoading, addPostDone } = useSelector(state => state.post);
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');
    const imageInput = useRef();

    useEffect(() => {
        if (addPostDone) setText('');
    }, [addPostDone]);
    const onChangeImages = useCallback((e) => {
        console.log('clickImgInfo', e.target.files);
        // const imageFormData = new FormData();
        // [].forEach.call(e.target.files, (f) => {
        //     imageFormData.append('image', f);
        // })
    }, []);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    const onRemoveImage = useCallback((i) => () => {

    }, []);
    const onSubmit = useCallback(() => {
        dispatch({
            type: ADD_POST_REQUEST,
            data: text,
        });
    }, [text]);
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
                                <img src={v} style={{ width: '200px' }} alt={v} />
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