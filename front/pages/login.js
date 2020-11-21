import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';
const Login = () => {
    const { logInDone } = useSelector(state => state.user);
    return (
        <AppLayout>
            {logInDone ? <UserProfile /> : <LoginForm />}
        </AppLayout>
    );
};
export default Login;