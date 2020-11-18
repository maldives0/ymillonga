import React, { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';


const PostForm = () => {
    const [text, onChangeText, setText] = useInput('');
    const imageInput = useRef();
    // const onChangeText =useCallback(()=>{

    // },[]);
    const onChangeImages = useCallback((e) => {
        console.log('clickImgInfo', e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        })
    }, []);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    const onRemoveImage = useCallback((i) => () => {

    }, []);
    const onSubmit = useCallback(() => { }, []);
    return (
        <Form
            style={{ margin: '10px 0 20px' }}
            encType="multipart/form-data"
            onFinish={onSubmit}
        >
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="오늘은 어떤 일이 있었나요?"
            />
            <div>
                <input type="file" name="image" multiple hidden
                    ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}>이미지 업로드하기</Button>
                <Button type="primary" style={{ float: 'right' }}
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
        </Form>
    );
};
export default PostForm; 