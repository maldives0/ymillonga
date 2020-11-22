import React, { useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';

const Login = () => {
    const { me } = useSelector(state => state.user);

    return (
        <AppLayout>
            {me && me.id ? <UserProfile /> : <LoginForm />}
        </AppLayout>
    );
};
export default Login;
