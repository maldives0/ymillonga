import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const Signup = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, onChangePasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

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
    }, [password, passwordCheck, term]);
    return (
        <AppLayout>
            <Head>
                <title>회원가입 | Ymillonga</title>
            </Head>
            <>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                    onFinish={onSubmit}

                >

                    <Form.Item label="이메일(E-mail)">
                        <Input name="user-name" type="email" value={email} required onChange={onChangeEmail} />
                    </Form.Item>
                    <Form.Item label="별명(nickname)">
                        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                    </Form.Item>
                    <Form.Item label="비밀번호(password)">
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </Form.Item>
                    <Form.Item label="비밀번호 체크(password)">
                        <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    </Form.Item>
                    <Form.Item >
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm} />약관에 동의합니다.
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
                    </Form.Item>
                    <Form.Item >
                        <Button
                            type="primary" htmlType="submit"

                        >가입하기</Button>
                    </Form.Item>
                </Form>
            </>
        </AppLayout>
    );
};
export default Signup; 