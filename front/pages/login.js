import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';
const Login = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <AppLayout>
            {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </AppLayout>
    );
};
export default Login;