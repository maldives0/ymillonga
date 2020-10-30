import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';
const UserProfile = () => {

    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction);
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">게시글수</div>,
                <div key="following">팔로잉</div>,
                <div key="follower">팔로워</div>
            ]}>
            <Card.Meta avatar={<Avatar>JY</Avatar>}
                title="juyoung" />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>

    );
};
export default UserProfile;