import React from 'react';
import Head from 'next/head';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga';

const Ymillonga = ({ Component }) => {

    return (
        <>
            <Head>
                <title>Ymillonga</title>
            </Head>

            <Component />
        </>
    );
};
Ymillonga.propTypes = {
    Component: Proptypes.elementType.isRequired,
};
export default wrapper.withRedux(withReduxSaga(Ymillonga));