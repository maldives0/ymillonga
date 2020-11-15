import React from 'react';
import { GoogleLogout } from 'react-google-login';



const GoogleLogoutBtn = () => {
    const onSuccessLogout = (res) => {
        console.log('google logout success:');
    }
    const onFailureLogout = (res) => {
        console.error('google logout failure:', res);
    }
    return (

        <GoogleLogout
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onSuccess={onSuccessLogout}
            onFailure={onFailureLogout}
        />

    );
};

export default GoogleLogoutBtn;