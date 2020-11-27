import React, { useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';

const Login = () => {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.user);
    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST
        });
    }, []);
    return (
        <AppLayout>
            {me && me.id ? <UserProfile /> : <LoginForm />}
        </AppLayout>
    );
};
export default Login;
