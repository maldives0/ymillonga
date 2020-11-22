import React, { useCallback } from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useRouter } from 'next/router';

const FacebookLoginBtn = () => {

    const router = useRouter();
    const onClickFacebookLogin = useCallback(() => {
        router.push('/user/facebook');
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