import React, { useCallback } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useRouter } from 'next/router';
import { backUrl } from '../config/config';
import { Tooltip } from 'antd';
const GoogleLoginBtn = () => {

    const router = useRouter();
    const onClickGoogleLogin = useCallback(() => {
        router.push(`${backUrl}/user/google`);

    }, []);
    return (
        <Tooltip
            placement="bottom"
            title=" 안드로이드 , iOS 및 OS X 사용자는 크롬 브라우저로 구글로 로그인하기 기능을 이용해주세요.">
            <GoogleLoginButton
                onClick={onClickGoogleLogin}
                align="center"
                size="40px"
                text="Google"
                style={{ width: '150px' }}
            />
        </Tooltip>
    );
};

export default GoogleLoginBtn;