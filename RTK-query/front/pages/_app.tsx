import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
// import "antd/dist/antd.less";
import { setupStore } from "../store/configureStore";

const store = setupStore();
const Ymillonga = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Ymillonga</title>
      </Head>
      <Provider store={store}>
        <Component />
      </Provider>
    </>
  );
};

export default Ymillonga;
