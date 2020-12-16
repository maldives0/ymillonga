import React, { useState, useCallback, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col, message } from 'antd';
import {
    HomeOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    LoginOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { GlobalLayout, InputSearch, Logo } from './style';
import useInput from '../hooks/useInput';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_MENUKEY_REQUEST, LOG_OUT_REQUEST } from '../reducers/user';

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
    const me = useSelector(state => state.user.me);
    const logOutDone = useSelector(state => state.user.logOutDone);
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const [currentKey, setCurrentKey] = useState('1');
    const [searchInput, onChangeSearchInput] = useInput('');
    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    const onClickDefaultKey = useCallback((e) => {
        if (me && me.id && e.key !== '2') {
            dispatch({
                type: CHANGE_MENUKEY_REQUEST,
                data: e.key,
            });
        }
    }, [me && me.id]);
    useEffect(() => {
        if (me && me.id) {
            setCurrentKey(me.menuKey);
        }
    }, [me && me.id]);
    // useEffect(() => {
    //     if (me && me.id && logOutDone) {
    //         Router.replace('/')
    //     }
    //     message.success('로그아웃되었습니다.', 5);
    // }, [logOutDone]);
    const toggleCollapsed = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);
    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return (
        <Layout>
            <GlobalLayout />
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Logo>
                    <Image
                        src="/images/ic_logo.png"
                        alt="logo"
                        width={150}
                        height={60} />
                </Logo>
                <Menu
                    theme="dark"
                    onClick={onClickDefaultKey}
                    selectedKeys={[currentKey]}
                    mode="inline"
                >
                    <Menu.Item
                        key="1" icon={<HomeOutlined />}>
                        <Link href="/"><a>Home</a></Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={
                        me && me.id ? <LogoutOutlined /> : <LoginOutlined />
                    }>
                        {
                            me && me.id ?
                                (<Link href="/login" ><a onClick={onLogout}>Logout</a></Link>)
                                :
                                (<Link href="/login"><a>Login</a></Link>)
                        }
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link href="/profile"><a>Profile</a></Link> </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <Row justify="space-between">
                        <Col xs={4} md={3}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: toggleCollapsed,
                                style: { marginLeft: 10 }
                            })}
                        </Col>
                        <Col xs={12} sm={8} md={8}>
                            <InputSearch enterButton
                                value={searchInput}
                                onChange={onChangeSearchInput}
                                onSearch={onSearch} />
                        </Col>
                    </Row>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
                <Row >
                    <Col span={6} offset={18}>
                        <a
                            href="https://github.com/maldives0/ymillonga"
                            target="_blank"
                            rel="noreferrer noopener"
                        >Made by maldives0</a>
                    </Col>
                </Row>
            </Layout>
        </Layout>


    );
};
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;
