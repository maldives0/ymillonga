import React, { useCallback } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useRouter } from 'next/router';
import { backUrl } from '../config/config';
const GoogleLoginBtn = () => {

    const router = useRouter();
    const onClickGoogleLogin = useCallback(() => {
        router.push(`${backUrl}/user/google`);

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