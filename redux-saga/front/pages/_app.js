import React from "react";
import Head from "next/head";
import wrapper from "../store/configureStore";

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

export default wrapper.withRedux(Ymillonga);
