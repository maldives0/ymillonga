import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';
const FollowButton = ({ post }) => {
    const { me, followLoading, unfollowLoading } = useSelector(state => state.user);
    const isFollowing = me?.Followings.find(v => v.id === post.User.id);
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

    return (
        <div>

            <Button
                loading={followLoading || unfollowLoading}
                onClick={ToggleFollow}
            >{isFollowing ? 'UnFollow' : 'Follow'}</Button>
        </div>
    );
};
FollowButton.propTypes = {
    post: PropTypes.shape({
        UserId: PropTypes.number
    }).isRequired,
};
export default FollowButton; 