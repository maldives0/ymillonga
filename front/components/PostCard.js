import React, { useState, useCallback, useEffect } from 'react';
import { Card, Button, Avatar, Popover, List, Comment, Modal, Form, Input, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { InputReport, CardWrapper } from './style';

import moment from 'moment';
import Link from 'next/link';
import {
    default as RetweetOutlined,
} from '@ant-design/icons/RetweetOutlined';
import {
    default as HeartTwoTone,
} from '@ant-design/icons/HeartTwoTone';
import {
    default as HeartOutlined,
} from '@ant-design/icons/HeartOutlined';
import {
    default as MessageOutlined,
} from '@ant-design/icons/MessageOutlined';
import {
    default as EllipsisOutlined,
} from '@ant-design/icons/EllipsisOutlined';


import CommentForm from './CommentForm';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import PostCardContent from './PostCardContent';
import {
    REMOVE_POST_REQUEST,
    LIKE_POST_REQUEST,
    UNLIKE_POST_REQUEST,
    RETWEET_REQUEST,
    UPDATE_POST_REQUEST,
    REPORT_POST_REQUEST,
} from '../reducers/post';
import useInput from '../hooks/useInput';

moment.locale('ko');

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const [reportText, onChangeReportText] = useInput('');
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const reportPostLoading = useSelector((state) => state.post.reportLoading);
    const reportPostDone = useSelector((state) => state.post.reportPostDone);
    const reportPostError = useSelector((state) => state.post.reportPostError);
    const removePostLoading = useSelector(state => state.post.removePostLoading);
    const [modalVisible, setModalVisible] = useState(false);

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
    const onChangePost = useCallback((editText) => () => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        dispatch({
            type: UPDATE_POST_REQUEST,
            data: {
                PostId: post.id,
                content: editText,
            },
        });
    }, [post]);
    const onReport = useCallback(() => {
        setModalVisible(true);
    }, []);
    const onsubmitReport = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        dispatch({
            type: REPORT_POST_REQUEST,
            data: {
                postId: post.id,
                reason: reportText,
            }
        });
    }, [reportText]);
    const reportCancel = useCallback(() => {
        setModalVisible(false);
    }, []);
    useEffect(() => {
        if (reportPostDone) {
            setModalVisible(false);
        }
        if (reportPostError) {
            setModalVisible(false);
        }
    }, [reportPostDone, reportPostError]);
    const liked = post.Likers?.find((v) => v.id === id);
    return (
        <CardWrapper key={post.id}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <Tooltip title="리트윗하기">
                        <RetweetOutlined
                            onClick={onRetweet}
                            key="retweet" />
                    </Tooltip>,
                    <Tooltip title="좋아요">
                        {liked ?
                            <HeartTwoTone
                                key="heart"
                                twoToneColor="#eb2f96"
                                onClick={onUnlike} /> :
                            <HeartOutlined
                                key="heart"
                                onClick={onLike} />}
                    </Tooltip>,
                    <Tooltip title="댓글달기">
                        <MessageOutlined
                            key="message"
                            onClick={onToggleComment} />
                    </Tooltip>,
                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id ?
                                    (
                                        <>
                                            {!post.RetweetId && (<Button
                                                onClick={onClickUpdate}>수정</Button>)}
                                            <Button
                                                type="danger"
                                                onClick={onRemovePost}
                                                loading={removePostLoading} >삭제</Button>
                                        </>
                                    ) :
                                    <Button onClick={onReport}>신고하기</Button>
                                }
                            </Button.Group>
                        )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={id && <FollowButton post={post} />}
                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
            >
                <Modal
                    title="report"
                    visible={modalVisible}
                    onOk={onsubmitReport}
                    confirmLoading={reportPostLoading}
                    onCancel={reportCancel}
                >
                    <Form >
                        <InputReport
                            rows={4}
                            value={reportText}
                            onChange={onChangeReportText}

                        />
                    </Form>
                    <p>신고하실 경우 되돌릴 수 없습니다. 계속 진행하시겠습니까?</p>
                </Modal>
                {post.RetweetId && post.Retweet ?
                    (
                        <Card
                            cover={post.Retweet.Images[0] &&
                                <PostImages images={post.Retweet.Images} />}>
                            <div style={{ float: 'right' }}>
                                {moment(post.Retweet.createdAt).startOf('hour').fromNow()}
                            </div>
                            <Card.Meta
                                avatar={(
                                    <Link
                                        prefetch={false}
                                        href={`/user/${post.Retweet.UserId}`}
                                        prefetch={false}><a><Avatar>
                                            {post.Retweet.User.nickname[0]}
                                        </Avatar></a></Link>
                                )}
                                title={post.Retweet.User.nickname}
                                description={
                                    <PostCardContent
                                        onCancelUpdate={onCancelUpdate}
                                        onChangePost={onChangePost}
                                        editMode={editMode}
                                        postData={post.Retweet.content}
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
                                    <Link
                                        prefetch={false}
                                        href={`/user/${post.User.id}`}
                                        prefetch={false}>
                                        <a><Avatar>
                                            {post.User.nickname[0]}
                                        </Avatar></a>
                                    </Link>
                                )}
                                title={post.User.nickname}
                                description={
                                    <PostCardContent
                                        editMode={editMode}
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