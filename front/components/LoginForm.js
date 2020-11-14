import React, { useEffect, useState, useCallback } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const layout = {
    wrapperCol: {
        span: 16,
        offset: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        span: 16,
        offset: 16,
    },
};

const LoginForm = () => {


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                />
            </Form.Item>

            <Form.Item {...layout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout} >
                <Button type="primary" htmlType="submit"
                >
                    로그인
            </Button>
            </Form.Item>
        </Form>
    );


};
export default LoginForm;