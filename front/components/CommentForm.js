import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST } from '../reducers/post';


const CommentForm = ({ post }) => {
    const id = useSelector(state => state.user.me?.id);
    const addCommentLoading = useSelector(state => state.user.addCommentLoading);
    const addCommentDone = useSelector(state => state.user.addCommentDone);

    const dispatch = useDispatch();
    const [commentText, onChangeCommentText, setCommentText] = useInput('');

    useEffect(() => {
        if (addCommentDone) setCommentText('');
    }, [addCommentDone]);


    const onSubmit = useCallback(() => {
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                content: commentText,
                userId: id,
                postId: post.id,
            },
        });
    }, [commentText, id]);
    return (
        <Form onFinish={onSubmit}
        >
            <Form.Item>
                <Input.TextArea
                    style={{ position: 'relative', marginTop: '10px' }}
                    rows={4}
                    value={commentText}
                    onChange={onChangeCommentText}
                />
                <Button
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: -40
                    }}
                    type="primary"
                    htmlType="submit"
                    loading={addCommentLoading}
                >입력하기</Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
    }).isRequired,
};
export default CommentForm; 