import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import moment from 'moment';
import Link from 'next/link';
import {
    RetweetOutlined,
    HeartTwoTone,
    HeartOutlined,
    MessageOutlined,
    EllipsisOutlined
} from '@ant-design/icons';

import CommentForm from './CommentForm';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from '../reducers/post';


moment.locale('ko');
const CardWrapper = styled.div`
margin-bottom: 20px;`
const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);

    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const { removePostLoading, updatePostLoading } = useSelector(state => state.post);

    const onLike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);
    const onUnlike = useCallback(() => {
        if (!id) alert('로그인이 필요합니다');
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);
    const onRemovePost = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다');
        }
        return dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        })
    }, [id]);
    const onRetweet = useCallback(() => {
        if (!id) alert('로그인이 필요합니다');
        dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        })
    }, [id]);


    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, [id]);

    const onClickUpdate = useCallback(() => {
        setEditMode(true);
    }, []);
    const onCancelUpdate = useCallback(() => {
        setEditMode(false);;
    }, []);
    const onChangePost = useCallback((editText) => {
        setCommentFormOpened((prev) => !prev);
    }, [post]);
    const liked = post.Likers?.find((v) => v.id === id);
    return (
        <CardWrapper key={post.id}>
            <Card
                cover={post?.Images[0] && <PostImages images={post?.Images} />}
                actions={[
                    <RetweetOutlined
                        onClick={onRetweet}
                        key="retweet" />,
                    liked ?
                        <HeartTwoTone
                            key="heart"
                            twoToneColor="#eb2f96"
                            onClick={onUnlike} /> :
                        <HeartOutlined
                            key="heart"
                            onClick={onLike} />,
                    <MessageOutlined
                        key="message"
                        onClick={onToggleComment} />,
                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post?.User.id === id ?
                                    (
                                        <>
                                            {<Button
                                                onClick={onClickUpdate}>수정</Button>}
                                            <Button
                                                type="danger"
                                                onClick={onRemovePost}
                                                loading={removePostLoading} >삭제</Button>
                                        </>
                                    ) :
                                    <Button>신고하기</Button>}
                            </Button.Group>
                        )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={id && <FollowButton post={post} />}
                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
            >
                {post.RetweetId && post.Retweet ?
                    (
                        <Card
                            cover={post.Retweet.Images[0] &&
                                <PostImages images={post.Retweet.Images} />}>
                            <div style={{ float: 'right' }}>
                                {moment(post.createdAt).startOf('hour').fromNow()}
                            </div>
                            <Card.Meta
                                avatar={(
                                    <Link href={`/`}
                                        prefetch={false}><a><Avatar>
                                            {post.Retweet.User.nickname[0]}
                                        </Avatar></a></Link>
                                )}
                                title={post.Retweet.User.nickname}
                                description={
                                    <PostCardContent
                                        onCancelUpdate={
                                            onCancelUpdate
                                        }
                                        onChangePost={onChangePost}
                                    />
                                }
                            />
                        </Card>
                    ) : (
                        <>
                            <div style={{ float: 'right' }}>
                                {moment(post.createdAt).startOf('hour').fromNow()}
                            </div>
                            <Card.Meta
                                avatar={(
                                    <Link href={`/user/${post.User.id}`}
                                        prefetch={false}><a><Avatar>
                                            {post.User.nickname[0]}
                                        </Avatar></a></Link>
                                )}
                                title={post.User.nickname}
                                description={
                                    <PostCardContent
                                        onCancelUpdate={
                                            onCancelUpdate
                                        }
                                        onChangePost={onChangePost}
                                        postData={post.content}
                                    />
                                }
                            />
                        </>
                    )}
            </Card>
            {commentFormOpened && (
                <>
                    <CommentForm post={post} />
                    <List
                        header={`댓글: ${post.Comments ? post.Comments.length : 0}개`}
                        itemLayout='horizontal'
                        dataSource={post.Comments || []}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={(
                                        <Link
                                            href={`/user/${item.User.id}`}
                                            prefetch={false}>
                                            <a>
                                                <Avatar>{item.User.nickname[0]}</Avatar>
                                            </a>
                                        </Link>
                                    )}
                                    content={item.content} />
                            </li>
                        )} />
                </>
            )}
        </CardWrapper >
    );
};
PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.any),
        Images: PropTypes.arrayOf(PropTypes.any),
        Likers: PropTypes.arrayOf(PropTypes.object),
        RetweetId: PropTypes.number,
        Retweet: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};
export default PostCard;