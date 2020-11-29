import React, { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import { Form, Checkbox, Button, Input } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';
import Router from 'next/router';

const Signup = () => {
    const dispatch = useDispatch();
    const { signUpLoading, signUpDone, signUpError, me } = useSelector(state => state.user);
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    useEffect(() => {
        if (me && me.id) {
            alert('로그인 중입니다. 메인페이지로 이동합니다.');
            Router.replace('/');//push는 뒤로가기 하면 히스토리가 남아있지만 replace는 지워짐
        }
    }, [me && me.id]);
    useEffect(() => {
        if (signUpDone) {
            Router.replace('/login');
        }
    }, [signUpDone]);
    useEffect(() => {
        if (signUpError) {
            alert(signUpError);
        }
    }, [signUpError]);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [password]);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) setPasswordError(true);
        if (!term) setTermError(true);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                email, password, nickname
            }
        })
    }, [email, password, passwordCheck, term]);
    return (
        <AppLayout>
            <Head>
                <title>회원가입 | Ymillonga</title>
            </Head>
            <>
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={onSubmit}
                >

                    <Form.Item label="E-mail">
                        <Input name="user-name" type="email" value={email} required onChange={onChangeEmail} />
                    </Form.Item>
                    <Form.Item label="Nickname">
                        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                    </Form.Item>
                    <Form.Item label="password">
                        <Input name="user-password" type="Password" value={password} required onChange={onChangePassword} />
                    </Form.Item>
                    <Form.Item label="Password check">
                        <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    </Form.Item>
                    <Form.Item >
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm} /> 약관에 동의합니다.
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
                    </Form.Item>
                    <Form.Item >
                        <Button
                            type="primary" htmlType="submit"
                            loading={signUpLoading}
                        >가입하기</Button>
                    </Form.Item>
                </Form>
            </>
        </AppLayout>
    );
};
export default Signup; 