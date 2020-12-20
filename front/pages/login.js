import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import { Typography } from 'antd';
import { ImageLayout } from '../components/style';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST, } from '../reducers/user';
import Router from 'next/router';
import { initialState } from "../reducers/user";
import useSWR, { mutate, trigger } from "swr";

const Title = Typography.Title;
const Login = () => {
    const me = useSelector(state => state.user.me);
    const logInSuccess = useSelector(state => state.user.logInSuccess);
    const { data: menuKeyData } = useSWR("globalState", { initialData: initialState }, { revalidateOnFocus: true });
    useEffect(() => {
        if (logInSuccess) {
            mutate("globalState", {
                ...menuKeyData,
                me: { menuKey: '1' }
            }, false);
            Router.replace('/');
            trigger("globalState");
        }
    }, [logInSuccess]);

    return (
        <AppLayout>
            {me && me.id ? (
                <>
                    <ImageLayout />
                    <Title level={3}>{`${me.nickname}님, Y Milonga에 오신 걸 환영합니다!`}</Title>
                    <div className='img-dancer-position-three'>
                        <img
                            width={500}
                            height={500}
                            src="/images/dancer2.png"
                        /></div>
                </>
            ) : <LoginForm />}
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);

    await context.store.sagaTask.toPromise();
});
export default Login;
