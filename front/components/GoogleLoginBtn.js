import React, { useCallback } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useRouter } from 'next/router';

const GoogleLoginBtn = () => {

    const router = useRouter();
    const onClickGoogleLogin = useCallback(() => {
        router.push('/user/google');
    });
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