import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col, Input } from 'antd';
import {
    HomeOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AimOutlined,
    UserOutlined
} from '@ant-design/icons';
import styled from '@emotion/styled';
import GlobalLayout from './GlobalLayout';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';
import Router from 'next/router';

const { Header, Sider, Content } = Layout;

const InputSearch = styled(Input.Search)`
vertical-align: middle;
margin-right:5px;`
    ;
const Logo = styled.div`
height: 32px;
margin: 16px;
`;

const AppLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [searchInput, onChangeSearchInput] = useInput('');
    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    const toggleCollapsed = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);
    return (
        <Layout>
            <GlobalLayout />
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Logo className="logo">
                    <img src="../imgs/logo.png" style={{ width: 19, height: 19 }} alt="logo" />
                </Logo>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                >
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link href="/"><a>Home</a></Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<AimOutlined />}>
                        <Link href="/map"><a>Map</a></Link> </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link href="/profile"><a>Profile</a></Link> </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <Row justify="space-between">
                        <Col xs={24} md={3}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: toggleCollapsed,
                                style: { marginLeft: 10 }
                            })}
                        </Col>
                        <Col xs={24} md={9}>
                            <InputSearch enterButton
                                value={searchInput}
                                onChange={onChangeSearchInput}
                                onSearch={onSearch} />
                        </Col>
                        <Col xs={24} md={6}>
                            <a
                                href="https://github.com/maldives0/ymillonga"
                                target="_blank"
                                rel="noreferrer noopener"
                            >Made by maldives0</a>
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
                    <Row gutter={8}>

                        <Col xs={24} md={15}> {children}
                            <img src={"../imgs/logo.png"} style={{ width: 19, height: 19 }} alt="logo" /></Col>
                        <Col xs={24} md={9}>
                            <LoginForm />
                        </Col>                    </Row>

                </Content>
            </Layout>
        </Layout>


    );
};
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;
