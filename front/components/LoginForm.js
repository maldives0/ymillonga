import React, { useEffect, useState, useCallback } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import GoogleLoginBtn from './GoogleLoginBtn';
import { css } from '@emotion/react';


const layout = {
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        span: 16,
    },

};


const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');


    const onSubmitForm = useCallback((errorInfo) => {
        console.log(id, password);
        console.error('login Failed:', errorInfo);
        setIsLoggedIn(true);
    }, [id, password]);


    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmitForm}

        >
            <Form.Item

                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    value={id}
                    onChange={onChangeId} />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                />
            </Form.Item>

            <Form.Item {...layout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout} justify="end"  >
                <Row gutter={8} >
                    <Col xs={12} md={6}>
                        <Button type="primary" htmlType="submit"
                        >
                            로그인
            </Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Link href="/signup"><a><Button>
                            회원가입
            </Button></a></Link>
                    </Col>
                </Row>
            </Form.Item>

            <Row gutter={8}>
                <Form.Item {...tailLayout} >
                    <GoogleLoginBtn />
                </Form.Item>
            </Row>
        </Form>
    );


};
export default LoginForm;