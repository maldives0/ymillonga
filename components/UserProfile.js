import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutRequestAction } from '../reducers/user';
const UserProfile = () => {

    const dispatch = useDispatch();
    const { logOutLoading, me } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        dispatch(logOutRequestAction);
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">twit<br />{me.Posts.length}</div>,
                <div key="following">following<br />{me.Followings.length}</div>,
                <div key="follower">follower<br />{me.Followers.length}</div>
            ]}>
            <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname} />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>

    );
};
export default UserProfile;