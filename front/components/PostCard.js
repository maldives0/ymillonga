import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from '../reducers/post';

const CardWrapper = styled.div`
margin-bottom: 20px;
`;
moment.locale('ko');//기본을 한글로 바꿈
const PostCard = ({ post }) => {

    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const { removePostLoading, } = useSelector((state) => state.post);


    const onLike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
            //front에서 아예 요청자체가 가지 않도록 한다
        }
        return dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);
    const onUnlike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);
    const onToggleComment = useCallback(() => {

        setCommentFormOpened((prev) => !prev);
    }, [id]);
    const onRemovePost = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        })
    }, [id]);
    const onRetweet = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        });
    }, [id]);


    const liked = post.Likers.find((v) => v.id === id);
    return (
        <CardWrapper key={post.id}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" onClick={onRetweet} />,
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
                                            loading={removePostLoading} onClick={onRemovePost}>delete</Button>
                                    </>
                                ) : <Button>report</Button>
                                }
                            </Button.Group>
                        )} >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={id && <FollowButton post={post} />}
                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}>

                {post.RetweetId && post.Retweet ?
                    (
                        <Card
                            cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
                        >
                            <div style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
                            <Card.Meta
                                avatar={(
                                    <Link href={`/user/${post.Retweet.User.id}`}>
                                        <a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a>
                                    </Link>
                                )}
                                title={post.Retweet.User.nickname}
                                description={<PostCardContent
                                    postData={post.Retweet.content} />} />
                        </Card>
                    ) : (
                        <>
                            <div style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
                            <Card.Meta
                                avatar={(
                                    <Link href={`/user/${post.User.id}`}>
                                        <a>
                                            <Avatar>{post.User.nickname[0]}</Avatar>
                                        </a>
                                    </Link>
                                )}
                                title={post.User.nickname}
                                description={<PostCardContent
                                    postData={post.content} />} />
                        </>
                    )}
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
                                        <Link
                                            href={`/user/${item.User.id}`}  ><a>
                                                <Avatar>{item.User.nickname[0]}</Avatar></a></Link>
                                    )}
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
        Comments: PropTypes.arrayOf(PropTypes.any),
        Images: PropTypes.arrayOf(PropTypes.any),
        Likers: PropTypes.arrayOf(PropTypes.object),
        RetweetId: PropTypes.number,
        Retweet: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};

export default PostCard;