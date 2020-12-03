import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Avatar, Card, Divider } from 'antd';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';

import NicknameEditForm from '../components/NicknameEditForm';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import styled from '@emotion/styled';

const CardWrapper = styled.div`
margin-bottom: 20px;`
const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, changeNicknameDone } = useSelector(state => state.user);
    const [editNickname, setEditNickname] = useState(false);
    const onClickEditNickname = useCallback(() => {
        setEditNickname((prev) => !prev)
    }, []);

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST
        });
    }, []);
    useEffect(() => {
        if (changeNicknameDone) {
            setEditNickname((prev) => !prev)
        }
    }, [changeNicknameDone]);
    return (
        <CardWrapper>
            <Card
                key="profile"
                style={{ width: '300', marginTop: 16 }}
                type="inner"
                extra={[
                    <LogoutOutlined key="logout" onClick={onLogout} />,
                    <Divider type="vertical" />,
                    <SettingOutlined key="edit-nickname" onClick={onClickEditNickname} />
                ]}
                actions={[
                    <div key="twit">
                        <Link href={`/user/${me.id}`}><a>게시글<br />{me.Posts.length}</a>
                        </Link>
                    </div>,
                    <div key="following">
                        <Link href="/profile">
                            <a>팔로잉<br />{me.Followings.length}</a>
                        </Link>
                    </div>,
                    <div key="follower">
                        <Link href="/profile">
                            <a>팔로어<br />{me.Followers.length}</a>
                        </Link>
                    </div>,
                ]}
            >
                <Card.Meta
                    avatar={
                        (<Link
                            href={`/user/${me.id}`}><a><Avatar>
                                {me.nickname[0]}</Avatar></a></Link>)
                    }
                    title={me.nickname}
                    style={{ marginBottom: "10px" }}
                />
                {editNickname && <NicknameEditForm />}
            </Card>
        </CardWrapper>
    );
};
export default UserProfile; 