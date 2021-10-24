import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
//.babelrc 설정 :styled component의 ssr을 위한 한 단계
//_document.js: _app.js 를 감싸주는 html, head,body를 수정할 수 있게 한다
//getInitalProps: _app, _document에서만 사용하는 특수한 ssr method(조만간 사라질 수도 있음), document를 customizing하기 위해 사용함
