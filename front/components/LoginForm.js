import React, { useEffect, useState, useCallback } from 'react';
import { Form, Input, Button, Row, Divider, Typography } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import {
    default as UserOutlined,
} from '@ant-design/icons/UserOutlined';
import {
    default as LockOutlined,
} from '@ant-design/icons/LockOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import FacebookLoginBtn from './FacebookLoginBtn';
import GoogleLoginBtn from './GoogleLoginBtn';

import { ImageLayout } from './style';

const Title = Typography.Title;


const LoginForm = () => {

    const logInLoading = useSelector(state => state.user.logInLoading);
    const logInError = useSelector(state => state.user.logInError);
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [basicButtonClicked, setBasicButtonClicked] = useState(false);


    useEffect(() => {
        if (logInError) alert(logInError);
    }, [logInError]);

    const onClickBasicButton = useCallback(() => {
        setBasicButtonClicked(true);
    }, []);

    const onSubmitForm = useCallback(() => {
        if (basicButtonClicked) {
            dispatch({
                type: LOG_IN_REQUEST,
                data: { email, password },
            });
        }
    }, [email, password, basicButtonClicked]);


    return (
        <>
            <ImageLayout />
            <div className="loginForm-title">
                <Title level={3}>Y Millonga에서 당신의 소중한 경험을 함께 나눠주세요!</Title>
            </div>
            <div className='img-dancer-position-one'>
                <img
                    width={250}
                    height={250}
                    src="/images/dancer1.png"
                /></div>

            <div className='img-dancer-position-two'>
                <img
                    width={300}
                    height={300}
                    src="/images/dancer3.png"
                /></div>
            <Row>
                <Form
                    name="basic-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onSubmitForm}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: basicButtonClicked,
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
                                required: basicButtonClicked,
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

                    <Form.Item>
                        <Row justify="end">
                            <Button type="primary" htmlType="submit"
                                loading={logInLoading}
                                onClick={onClickBasicButton}
                            >
                                로그인
            </Button>
                            <Divider type="vertical" style={{ border: 'none' }} />
                            <Link href="/signup"><a><Button>
                                회원가입
            </Button></a></Link>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Row justify="center" wrap={false}>  <GoogleLoginBtn />
                            <FacebookLoginBtn />
                        </Row>
                    </Form.Item>
                </Form>
            </Row>
        </>
    );


};
export default LoginForm;