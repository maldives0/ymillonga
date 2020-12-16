import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Avatar, Card, Divider, Tooltip, message } from 'antd';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';

import NicknameEditForm from '../components/NicknameEditForm';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import styled from '@emotion/styled';

const CardWrapper = styled.div`
margin-bottom: 20px;`
const UserProfile = () => {
    const dispatch = useDispatch();
    const me = useSelector(state => state.user.me);

    const changeNicknameDone = useSelector(state => state.user.changeNicknameDone);
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
                key={`${me.id}_profile`}
                style={{ width: '300', marginTop: 16 }}
                type="inner"
                extra={[
                    <Tooltip title="로그아웃">
                        <LogoutOutlined key="logout" onClick={onLogout} />
                    </Tooltip>
                    ,
                    <Divider type="vertical" />,
                    <Tooltip title="닉네임 바꾸기">   <SettingOutlined key="edit-nickname" onClick={onClickEditNickname} /></Tooltip>

                ]}
                actions={[
                    <div key={`${me.id}_twit`}>
                        <Link
                            prefetch={false}
                            href={`/user/${me.id}`}><a>게시글<br />{me.Posts.length}</a>
                        </Link>
                    </div>,
                    <div key={`${me.id}_following`}>
                        <Link
                            prefetch={false}
                            href={`/posts/related`}>
                            <a>팔로잉<br />{me.Followings.length}</a>
                        </Link>
                    </div>,
                    <div key={`${me.id}_follower`}>
                        <Link href="/profile">
                            <a>팔로어<br />{me.Followers.length}</a>
                        </Link>
                    </div>,
                    <div key={`${me.id}_ignoring`}>
                        <Link href="/profile">
                            <a>차단자<br />{me.Ignorings.length}</a>
                        </Link>
                    </div>,
                ]}
            >
                <Card.Meta
                    avatar={
                        (<Link
                            prefetch={false}
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