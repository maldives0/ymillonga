import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col } from 'antd';
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


const { Header, Sider, Content } = Layout;
const Logo = styled.div`
height: 32px;
margin: 16px;
`;

const AppLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);


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
                    {React.createElement(collapsed ? MenuFoldOutlined : MenuUnfoldOutlined, {
                        className: 'trigger',
                        onClick: toggleCollapsed,
                        style: { marginLeft: 10 }
                    })}

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
                        <Col xs={24} md={6}>
                            <LoginForm />
                        </Col>
                        <Col xs={24} md={12}> {children}
                            <img src={"../imgs/logo.png"} style={{ width: 19, height: 19 }} alt="logo" /></Col>
                        <Col xs={24} md={6}>
                            <a
                                href="https://github.com/maldives0/ymillonga"
                                target="_blank"
                                rel="noreferrer noopener"
                            >Made by maldives0</a></Col>                    </Row>

                </Content>
            </Layout>
        </Layout>


    );
};
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;
