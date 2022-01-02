import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import { Typography } from "antd";
import { ImageLayout } from "../components/style";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import axios from "axios";
import wrapper from "../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import Router from "next/router";
import { initialState } from "../reducers/user";
import useSWR, { mutate, trigger } from "swr";
import { useGetLoadMyInfoQuery, usePostLoginMutation } from "../services/user";

const Title = Typography.Title;
const Login = () => {
  const { data: me, isError, isLoading } = useGetLoadMyInfoQuery(null);

  const logOutDone = useSelector((state) => state.user.logOutDone);
  const [
    postLogin,
    {
      isLoading: isLoadingLogin,
      isSuccess: isSuccessLogin,
      isError: isErrorLogin,
    },
  ] = usePostLoginMutation();

  useEffect(() => {
    console.log("me", me);
    console.log("isError", isError);
    console.log("isLoading", isLoading);
    console.log("isLoadingLogin", isLoadingLogin);
    console.log("isSuccessLogin", isSuccessLogin);
    console.log("isErrorLogin", isErrorLogin);
  }, [me, isError, isLoading, isLoadingLogin]);

  const handleLogin = useCallback(() => {
    postLogin({ email: "maliethy@kakao.com", password: "check.env" });
  }, []);

  // useEffect(() => {
  //     if (me && me.id && !logOutDone) {
  //         mutate("globalState", {
  //             ...menuKeyData,
  //             me: { menuKey: '1' }
  //         }, false);
  //         Router.replace('/');
  //         trigger("globalState");
  //     }
  // }, [me, logOutDone]);

  return (
    <AppLayout>
      {me && me.id ? (
        <>
          <ImageLayout />
          <div className="img-dancer-position">
            <Title
              level={3}
            >{`${me.nickname}님, Y Milonga에 오신 걸 환영합니다!`}</Title>
            <div>
              <img width={500} height={500} src="/images/dancer2.png" />
            </div>
          </div>
        </>
      ) : (
        <LoginForm />
      )}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);

    await context.store.sagaTask.toPromise();
  }
);
export default Login;
