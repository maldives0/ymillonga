import React, { useCallback, useEffect } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useRouter } from 'next/router';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { useDispatch } from 'react-redux';

const GoogleLoginBtn = () => {
    const dispatch = useDispatch();

    const router = useRouter();
    const onClickGoogleLogin = useCallback(() => {
        router.push('/api/google');
        dispatch({
            type: LOAD_USER_REQUEST
        });
    }, []);
    return (

        <GoogleLoginButton
            onClick={onClickGoogleLogin}
            align="center"
            size="40px"
            text="Google"
            style={{ width: '150px' }}
        />

    );
};

export default GoogleLoginBtn;