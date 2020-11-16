import React from 'react';
import { GoogleLogin } from 'react-google-login';
import refreshTokenSetup from '../utils/refreshToken';

const GoogleLoginBtn = () => {
    const onSuccessLogin = (res) => {
        console.log('google login success:', res);
        // refreshTokenSetup(res);
    }
    const onFailureLogin = (res) => {
        console.error('google login failure:', res);
    }
    return (

        <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={onSuccessLogin}
            onFailure={onFailureLogin}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />

    );
};

export default GoogleLoginBtn;