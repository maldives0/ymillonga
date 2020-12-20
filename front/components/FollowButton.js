import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST, UNIGNORE_REQUEST, IGNORE_REQUEST } from '../reducers/user';
const FollowButton = ({ post }) => {

    const me = useSelector(state => state.user.me);
    const followLoading = useSelector(state => state.user.followLoading);
    const unfollowLoading = useSelector(state => state.user.unfollowLoading);
    const ignoreLoading = useSelector(state => state.user.ignoreLoading);
    const unIgnoreLoading = useSelector(state => state.user.unIgnoreLoading);
    const isFollowing = me.Followings.find((v) => v.id === post.User.id);
    const isIgnoring = me.Ignorings.find((v) => v.id === post.User.id);
    const dispatch = useDispatch();
    const ToggleFollow = useCallback(() => {
        if (isFollowing) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            });
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            });
        }
    }, [isFollowing]);
    const toggleIgnore = useCallback(() => {
        if (isIgnoring) {
            dispatch({
                type: UNIGNORE_REQUEST,
                data: post.User.id,
            });
        } else {
            dispatch({
                type: IGNORE_REQUEST,
                data: post.User.id,
            });
        }

    }, [isIgnoring]);
    if (post.User?.id === me.id) {
        return null;
    }


    return (
        <div>
            <Button
                style={{ marginRight: 1 }}
                loading={followLoading || unfollowLoading}
                onClick={ToggleFollow}
            >{isFollowing ? '언팔로우' : '팔로우'}</Button>
            <Button
                loading={ignoreLoading || unIgnoreLoading}
                onClick={toggleIgnore}>{isIgnoring ? '차단풀기' : '차단하기'}</Button>
        </div>
    );
};
FollowButton.propTypes = {
    post: PropTypes.shape({
        UserId: PropTypes.number
    }).isRequired,
};
export default FollowButton; 