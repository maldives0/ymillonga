import React from "react";

const Error = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode} Error발생</h1>
    </div>
  );
};

Error.defaultProps = {
  statusCode: 400,
};
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
