import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';

const UserProfile = ({ setIsLoggedIn }) => {
    const OnLogOut = useCallback(() => {
        setIsLoggedIn(false);
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
            <Button onclick={OnLogOut}>로그아웃</Button>
        </Card>

    );
};
export default UserProfile;