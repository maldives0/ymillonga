
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card, Button } from 'antd';
import { logOutRequestAction } from '../reducers/user';
import Link from 'next/link';
const UserProfile = () => {

    const dispatch = useDispatch();
    const { logOutLoading, me } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        dispatch(logOutRequestAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit"><Link href={`/user/${me.id}`}  ><a>twit<br />{me.Posts.length}</a></Link></div>,
                <div key="following"><Link href={`/profile/${me.id}`}  ><a>following<br />{me.Followings.length}</a></Link></div>,
                <div key="follower"><Link href={`/profile/${me.id}`}  ><a>follower<br />{me.Followers.length}</a></Link></div>
            ]}>
            <Card.Meta avatar={(
                <Link
                    href={`/user/${me.id}`} prefetch={false}><a>
                        <Avatar>{me.nickname[0]}</Avatar>
                    </a>
                </Link>)}
                title={me.nickname} />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>

    );
};
export default UserProfile;