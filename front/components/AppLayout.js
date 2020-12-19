import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col, Tooltip } from 'antd';
import {
    default as HomeOutlined,
} from '@ant-design/icons/HomeOutlined';
import {
    default as MenuUnfoldOutlined,
} from '@ant-design/icons/MenuUnfoldOutlined';
import {
    default as MenuFoldOutlined,
} from '@ant-design/icons/MenuFoldOutlined';
import {
    default as LoginOutlined,
} from '@ant-design/icons/LoginOutlined';
import {
    default as LogoutOutlined,
} from '@ant-design/icons/LogoutOutlined';
import {
    default as UserOutlined,
} from '@ant-design/icons/UserOutlined';
import {
    default as GithubOutlined,
} from '@ant-design/icons/GithubOutlined';
import { GlobalLayout, InputSearch, Logo } from './style';
import useInput from '../hooks/useInput';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_MENUKEY_REQUEST, LOG_OUT_REQUEST } from '../reducers/user';
import { initialState } from "../reducers/user"
import useSWR, { mutate, trigger } from "swr"
const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
    const { data } = useSWR("globalState", { initialData: initialState }, { revalidateOnFocus: true })

    const me = useSelector(state => state.user.me);
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(true);
    const [currentKey, setCurrentKey] = useState(data?.me.menuKey || '1');
    const [searchInput, onChangeSearchInput] = useInput('');
    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    const onClickDefaultKey = useCallback((e) => {
        mutate("globalState", {
            ...data,
            me: { menuKey: e.key }
        }, false)
        if (me && me.id && e.key !== '2') {
            dispatch({
                type: CHANGE_MENUKEY_REQUEST,
                data: e.key,
            });
        }
        trigger("globalState");
    }, [me && me.id]);
    useEffect(() => {
        if (me && me.id) {
            setCurrentKey(me.menuKey);
        }
    }, [me && me.id]);

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
                            <Tooltip title="메뉴보기">
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: toggleCollapsed,
                                    style: { marginLeft: 10 }
                                })}
                            </Tooltip>
                        </Col>
                        <Col xs={12} sm={8} md={8}>
                            <Tooltip
                                placement="bottom"
                                title="해시테그를 검색해보세요!">
                                <InputSearch enterButton
                                    value={searchInput}
                                    onChange={onChangeSearchInput}
                                    onSearch={onSearch} />
                            </Tooltip>
                        </Col>
                    </Row>
                </Header>
                <Content
                    className="site-layout-background" >
                    {children}
                </Content>
                <Row className="site-layout-foot" justify="start">
                    <Col span={24} offset={2}>
                        <a
                            href="https://github.com/maldives0/ymillonga-sns"
                            target="_blank"
                            rel="noreferrer noopener"
                        >© 2020 Juyoung Jung.  All rights reserved. <GithubOutlined /> </a>
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
