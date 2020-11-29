import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col, Input } from 'antd';
import {
    HomeOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AimOutlined,
    UserOutlined,
    LoginOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import { css } from '@emotion/react'
import styled from '@emotion/styled';
import GlobalLayout from './GlobalLayout';
import useInput from '../hooks/useInput';
import Router from 'next/router';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST, LOAD_USER_REQUEST } from '../reducers/user';

const { Header, Sider, Content } = Layout;

const InputSearch = styled(Input.Search)`
vertical-align: middle;
margin-right:5px;`
    ;
const Logo = styled.div`
height: 60px;
margin:15px 10px;
display:flex;
justify-content:center;
text-align:cetner;
background-color:rgba(255,255,255,0.5);
border-radius:50%;
`;

const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(true);
    // const [defaultKey, setDefaultKey] = useState('1');
    const [searchInput, onChangeSearchInput] = useInput('');
    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);
    // const onChangeDefaultKey = useCallback((e) => {
    //     console.log('key', e.key)
    //     setDefaultKey(e.key);
    // }, []);
    const toggleCollapsed = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);
    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);
    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST,
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
                        css={css`
                        width:150px;
                        height:60px;`}
                        width={150}
                        height={60}
                    />
                </Logo>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                >
                    <Menu.Item
                        key="1" icon={<HomeOutlined />}>
                        <Link href="/"><a>Home</a></Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<AimOutlined />}>
                        <Link href="/map"><a>Map</a></Link> </Menu.Item>
                    <Menu.Item key="3" icon={
                        me && me.id ? <LogoutOutlined /> : <LoginOutlined />
                    }>
                        {
                            me && me.id ?
                                (<Link href="/login" ><a onClick={onLogout}>Logout</a></Link>)
                                :
                                (<Link href="/login"><a>Login</a></Link>)
                        }
                    </Menu.Item>

                    <Menu.Item key="4" icon={<UserOutlined />}>
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
                        <Col xs={12} md={12}>
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
                    <Col justify="end" xs={24} md={12}>
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
