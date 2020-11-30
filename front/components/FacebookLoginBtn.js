import React, { useCallback } from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useRouter } from 'next/router';
import { backUrl } from '../config/config';
const FacebookLoginBtn = () => {

    const router = useRouter();
    const onClickFacebookLogin = useCallback(() => {
        router.push(`${backUrl}/user/facebook`);
    });
    return (

        <FacebookLoginButton
            onClick={onClickFacebookLogin}
            align="center"
            size="40px"
            text="Facebook"
            style={{ width: '150px' }}
        />

    );
};

export default FacebookLoginBtn;