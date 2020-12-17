import React, { useEffect, useState, useCallback } from 'react';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
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
import { useRouter } from 'next/router';
const layout = {
    wrapperCol: {
        xs: { span: 12, offset: 2 },
        sm: { span: 12, offset: 3 },
        md: { span: 8, offset: 8 },
    },
};
const tailLayout = {
    wrapperCol: { offset: 12, span: 16 },
};
const btnLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const LoginForm = () => {
    const Router = useRouter();

    const me = useSelector(state => state.user.me);
    const logInLoading = useSelector(state => state.user.logInLoading);
    const logInError = useSelector(state => state.user.logInError);
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [basicButtonClicked, setBasicButtonClicked] = useState(false);
    useEffect(() => {
        if (me && me.id) {
            alert('로그인 중입니다. 메인페이지로 이동합니다.');
            Router.replace('/');//push는 뒤로가기 하면 히스토리가 남아있지만 replace는 지워짐
        }
    }, [me && me.id]);

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

            <Form.Item {...tailLayout} >
                <Row >
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
            <Form.Item {...btnLayout}>
                <Row >
                    <GoogleLoginBtn />
                    <FacebookLoginBtn />
                </Row>
            </Form.Item>
        </Form>
    );


};
export default LoginForm;