import React, { useEffect, useState, useCallback } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import GoogleLoginBtn from './GoogleLoginBtn';

import { useSelector, useDispatch } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

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


const LoginForm = () => {
    const { logInLoading, logInError, } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    useEffect(() => {
        if (logInError) alert(logInError);
    }, [logInError]);

    const onSubmitForm = useCallback(() => {
        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password },
        });

    }, [email, password]);


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
                    value={email}
                    onChange={onChangeEmail} />
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
                            loading={logInLoading}
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