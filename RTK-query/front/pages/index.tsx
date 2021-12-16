import { Button } from "antd";
import React, { useEffect, useCallback } from "react";
import { useGetLoadMyInfoQuery, usePostLoginMutation } from "../services/user";
// import App, { AppProps } from "next/app";
// import { applyMiddleware, compose, createStore, Store } from "redux";
// import createSagaMiddleware, { Task } from "redux-saga";
// import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
// import AppLayout from "../components/AppLayout";
// import PostForm from "../components/PostForm";
// import PostCard from "../components/PostCard";
// import UserProfile from "../components/UserProfile";
// import { IReducerState, RootState } from "../reducers";
// import {
//   LOAD_POSTS_REQUEST,
//   LOAD_RELATED_POSTS_REQUEST,
// } from "../reducers/post";
// import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
// import wrapper from "../store/configureStore";
// import { END } from "redux-saga";
// import axios from "axios";
// import { PageHeader, message, Button } from "antd";
// import Link from "next/link";
// import Router from "next/router";
// import { ButtonLayout, ImgWrapper } from "../components/style";

// import { default as LoginOutlined } from "@ant-design/icons/LoginOutlined";
// interface Props extends AppProps {
//   store: Store<IReducerState>;
// }
const Home = () => {
  const { data, isError, isLoading } = useGetLoadMyInfoQuery(null);
  const [
    postLogin,
    {
      isLoading: isLoadingLogin,
      isSuccess: isSuccessLogin,
      isError: isErrorLogin,
    },
  ] = usePostLoginMutation();

  useEffect(() => {
    console.log("data", data);
    console.log("isError", isError);
    console.log("isLoading", isLoading);
    console.log("isLoadingLogin", isLoadingLogin);
    console.log("isSuccessLogin", isSuccessLogin);
    console.log("isErrorLogin", isErrorLogin);
  }, [data, isError, isLoading, isLoadingLogin]);

  const handleLogin = useCallback(() => {
    postLogin({ email: "maliethy@kakao.com", password: "tkfkd563802" });
  }, []);
  //   const dispatch = useDispatch();
  //   const id = useSelector((state: RootStateOrAny) => state.user.me?.id);
  //   const mainPosts = useSelector(
  //     (state: RootStateOrAny) => state.post.mainPosts
  //   );
  //   const hasMorePosts = useSelector(
  //     (state: RootStateOrAny) => state.post.hasMorePosts
  //   );
  //   const loadPostsLoading = useSelector(
  //     (state: RootStateOrAny) => state.post.loadPostsLoading
  //   );
  //   const reportPostDone = useSelector(
  //     (state: RootStateOrAny) => state.post.reportPostDone
  //   );
  //   const reportPostError = useSelector(
  //     (state: RootStateOrAny) => state.post.reportPostError
  //   );
  //   const retweetError = useSelector(
  //     (state: RootStateOrAny) => state.post.retweetError
  //   );
  //   const me = useSelector((state: RootStateOrAny) => state.user.me);
  //   const ignoreError = useSelector(
  //     (state: RootStateOrAny) => state.user.ignoreError
  //   );
  //   const unIgnoreError = useSelector(
  //     (state: RootStateOrAny) => state.user.unIgnoreError
  //   );
  //   const ignoreDone = useSelector(
  //     (state: RootStateOrAny) => state.user.ignoreDone
  //   );
  //   const unIgnoreDone = useSelector(
  //     (state: RootStateOrAny) => state.user.unIgnoreDone
  //   );

  //   const onClickRelatedPosts = useCallback(() => {
  //     if (!id) {
  //       return alert("로그인이 필요합니다.");
  //     }
  //     dispatch({
  //       type: LOAD_RELATED_POSTS_REQUEST,
  //     });
  //   }, [id]);

  //   useEffect(() => {
  //     if (ignoreDone) {
  //       message.success("차단되었습니다.", 5);
  //     }
  //     if (ignoreError) {
  //       message.error(ignoreError, 5);
  //     }
  //   }, [ignoreDone, ignoreError]);
  //   useEffect(() => {
  //     if (unIgnoreDone) {
  //       message.success("차단이 풀어졌습니다.", 5);
  //     }
  //     if (unIgnoreError) {
  //       message.error("차단 풀기하는 도중에 에러가 발생했습니다.", 5);
  //     }
  //   }, [unIgnoreDone, unIgnoreError]);

  //   useEffect(() => {
  //     if (reportPostDone) {
  //       message.success(
  //         "신고가 접수되었습니다. 빠른 시일 내로 조치하겠습니다.",
  //         5
  //       );
  //     }
  //     if (reportPostError) {
  //       message.error(reportPostError, 5);
  //     }
  //   }, [reportPostDone, reportPostError]);
  //   useEffect(() => {
  //     if (retweetError) {
  //       message.error("리트윗하는 도중에 에러가 발생했습니다.", 5);
  //     }
  //   }, [retweetError]);

  //   useEffect(() => {
  //     function onScroll() {
  //       if (
  //         window.scrollY + document.documentElement.clientHeight >
  //         document.documentElement.scrollHeight - 300
  //       ) {
  //         if (hasMorePosts && !loadPostsLoading) {
  //           const lastId = mainPosts[mainPosts.length - 1]?.id;
  //           dispatch({
  //             type: LOAD_POSTS_REQUEST,
  //             lastId,
  //           });
  //         }
  //       }
  //     }
  //     window.addEventListener("scroll", onScroll);
  //     return () => {
  //       //쌓여있는 이벤트 메모리를 제거해주기
  //       window.removeEventListener("scroll", onScroll);
  //     };
  //   }, [mainPosts, hasMorePosts, loadPostsLoading]);

  return (
    <>
      hello ymillonga
      <Button onClick={handleLogin}>login</Button>
    </>
    // <AppLayout>
    //     {me && me.id ? <UserProfile /> : (
    //         <PageHeader
    //             className="site-page-header"
    //             onBack={() => Router.push('/login')}
    //             title="이번 밀롱가에서는 어떤 일이 있었나요?"
    //             subTitle="로그인을 하면 Y millonga에서 제공하는 다양한 기능을 누리실 수 있습니다."
    //             backIcon={<ButtonLayout
    //                 type="primary"
    //                 onClick={() => Router.push('/login')}
    //             ><LoginOutlined />로그인</ButtonLayout>}
    //         />
    //     )}
    //     <ImgWrapper>
    //         <img src="/images/dancers.png" />
    //     </ImgWrapper>

    //     {me && me.id &&
    //         (<>
    //             <PostForm />
    //             <Button
    //                 style={{ marginBottom: 5 }}
    //                 type="primary"
    //                 loading={loadPostsLoading}
    //                 onClick={onClickRelatedPosts}>
    //                 <Link href='/posts/related'>
    //                     <a>팔로잉 게시글만 보기</a>
    //                 </Link></Button>
    //         </>)}

    //     {mainPosts?.map((post) => {
    //         return (
    //             <PostCard key={post.id} post={post} />
    //         );
    //     })}
    // </AppLayout>
  );
};
//antd.less => antd customize theme

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

//     const cookie = context.req ? context.req.headers.cookie : '';
//     axios.defaults.headers.Cookie = '';
//     if (context.req && cookie) {
//         axios.defaults.headers.Cookie = cookie;
//     }
//     context.store.dispatch({
//         type: LOAD_MY_INFO_REQUEST,
//     });
//     context.store.dispatch({
//         type: LOAD_POSTS_REQUEST,
//     });
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
// });

export default Home;
