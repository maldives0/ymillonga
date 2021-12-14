import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Row, Col } from "antd";
import { default as HomeOutlined } from "@ant-design/icons/HomeOutlined";
import { default as LoginOutlined } from "@ant-design/icons/LoginOutlined";
import { default as LogoutOutlined } from "@ant-design/icons/LogoutOutlined";
import { default as UserOutlined } from "@ant-design/icons/UserOutlined";
import { default as GithubOutlined } from "@ant-design/icons/GithubOutlined";
import { default as QuestionCircleOutlined } from "@ant-design/icons/QuestionCircleOutlined";
import { GlobalLayout, InputSearch, Logo } from "./style";
import useInput from "../hooks/useInput";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const me = useSelector((state) => state.user.me);
  const dispatch = useDispatch();
  const [searchInput, onChangeSearchInput] = useInput("");

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Layout className="layout">
      <GlobalLayout />
      <Header className="layout-background-header">
        <Row justify="space-between">
          <Col xs={4} sm={3}>
            <Logo>
              <Image
                src="/images/ic_logo.png"
                alt="logo"
                width={70}
                height={70}
              />
            </Logo>
          </Col>
          <Col xs={10} sm={14} md={14}>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="/" icon={<HomeOutlined />}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Menu.Item>
              {me ? (
                <Menu.Item key="/logout" icon={<LogoutOutlined />}>
                  <Link href="/login">
                    <a onClick={onLogout}>Logout</a>
                  </Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="/login" icon={<LoginOutlined />}>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </Menu.Item>
              )}
              <Menu.Item key="/profile" icon={<UserOutlined />}>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>{" "}
              </Menu.Item>
              <Menu.Item key="/about" icon={<QuestionCircleOutlined />}>
                <Link href="/about">
                  <a>About</a>
                </Link>{" "}
              </Menu.Item>
            </Menu>
          </Col>
          <Col xs={10} sm={7} md={6} lg={4}>
            <InputSearch
              enterButton
              placeholder="해시태그를 검색해보세요"
              value={searchInput}
              onChange={onChangeSearchInput}
              onSearch={onSearch}
            />
          </Col>
        </Row>
      </Header>
      <Content className="layout-background">{children}</Content>
      <Footer className="layout-foot" justify="start">
        <Col span={24} offset={2}>
          <a
            href="https://github.com/maldives0/ymillonga-sns"
            target="_blank"
            rel="noreferrer noopener"
          >
            © 2020 Juyoung Jung. All rights reserved. <GithubOutlined />{" "}
          </a>
        </Col>
      </Footer>
    </Layout>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
