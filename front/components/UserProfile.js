import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { Avatar, Card, Divider } from 'antd';
import { LoginOutlined, SettingOutlined } from '@ant-design/icons';
import { CardWrapper } from './style';
import NicknameEditForm from '../components/NicknameEditForm';


const UserProfile = ({ setIsLoggedIn }) => {
    const [editNickname, setEditNickname] = useState(false);
    const onClickEditNickname = useCallback(() => {
        setEditNickname((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <CardWrapper>
            <Card
                style={{ width: 300, marginTop: 16 }}
                type="inner"
                extra={[
                    <LoginOutlined key="logout" onClick={onLogout} />,
                    <Divider type="vertical" />,
                    <SettingOutlined key="edit-nickname" onClick={onClickEditNickname} />
                ]}
                actions={[
                    <div key="twit"><Link href="#"><a>게시글<br />1</a></Link></div>,
                    <div key="following"><Link href="#"><a>팔로잉<br />1</a></Link></div>,
                    <div key="follower"><Link href="#"><a>팔로어<br />1</a></Link></div>,
                ]}
            >
                <Card.Meta
                    avatar={
                        (<Link
                            href="#"><a><Avatar></Avatar></a></Link>)
                    }
                    title="Card title"
                />
                {editNickname && <NicknameEditForm />}
            </Card>
        </CardWrapper>
    );
};
export default UserProfile; 