import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';
import useInput from '../hooks/useInput';
const PostForm = () => {
    const { imagePaths, postAdded } = useSelector(state => state.post);
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    useEffect(() => {
        if (postAdded) {
            setText('');
        }
    }, [postAdded]);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const onSubmit = useCallback(() => {
        dispatch(addPost);
    }, []);

    return (
        <Form
            style={{ margin: '10px 0 20px' }}
            encType="multipart/form-data"
            onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 일이 있었나요?" />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>upload image</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">twit</Button>
            </div>
            <div>
                {imagePaths.map((v) => {
                    return (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={v} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button>delete</Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Form>
    );
};
export default PostForm;