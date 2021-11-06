import "antd/dist/antd.css";
// import "antd/dist/antd.less";
import wrapper from "../store/configureStore";
import React, { useRef } from "react";
import Head from "next/head";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "antd/dist/antd.css";
// import "antd/dist/antd.less";

const Ymillonga = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  // console.log("pageProps.dehydratedState", pageProps.dehydratedState);
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Ymillonga</title>
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log("metric", metric);
}

// export default Ymillonga;

export default wrapper.withRedux(Ymillonga);
