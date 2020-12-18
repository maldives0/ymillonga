import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST, } from '../reducers/user';
import Router from 'next/router';
const Login = () => {
    const me = useSelector(state => state.user.me);
    useEffect(() => {
        if (me && me.id) {
            Router.replace('/')
        }
    }, [me, me.id]);
    return (
        <AppLayout>
            {me && me.id ? <UserProfile /> : <LoginForm />}
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
