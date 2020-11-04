import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../reducers/post';

const CardWrapper = styled.div`
margin-bottom: 20px;
`;
const PostCard = ({ post }) => {

    const dispatch = useDispatch();

    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const { removePostLoading } = useSelector((state) => state.post);


    const onLike = useCallback(() => {
        dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id,
        });
    }, []);
    const onUnlike = useCallback(() => {
        dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id,
        });
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);
    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        })
    }, []);

    const id = useSelector((state) => state.user.me?.id);
    const liked = post.Likers.find((v) => v.id === id);
    return (
        <CardWrapper key={post.id}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked ? <HeartTwoTone
                        twoToneColor="#eb2f96"
                        key="heart"
                        onClick={onUnlike} /> :
                        <HeartOutlined key="heart"
                            onClick={onLike} />,
                    <MessageOutlined key="message" onClick={onToggleComment} />,
                    <Popover key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id ? (
                                    <>
                                        <Button>update</Button>
                                        <Button type="danger"
                                            loading={removePostLoading} onClick={onRemovePost}                                        >delete</Button>
                                    </>
                                ) : <Button>report</Button>
                                }
                            </Button.Group>
                        )} >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={id && <FollowButton post={post} />}>
                <Card.Meta
                    Avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent
                        postData={post.content} />} />

            </Card>
            {commentFormOpened && (
                <>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={(
                                        <Avatar>{item.User.nickname[0]}</Avatar>)}
                                    content={item.content} />
                            </li>
                        )} />


                </>
            )}

        </CardWrapper>
    );
};
PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.any),
        Images: PropTypes.arrayOf(PropTypes.any),
        Likers: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default PostCard;