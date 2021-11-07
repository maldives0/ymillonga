import React, { useEffect, useCallback } from "react";
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
  useQuery,
} from "react-query";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import UserProfile from "../components/UserProfile";
import { PageHeader, message, Button } from "antd";
import Router from "next/router";
import { ButtonLayout, ImgWrapper } from "../components/style";
import { useInView } from "react-intersection-observer";
import { default as LoginOutlined } from "@ant-design/icons/LoginOutlined";
import { loadPostsAPI, loadRelatedPostsAPI } from "../apis/post";
import User from "../interfaces/user";
import { loadMyInfoAPI } from "../apis/user";
import Post from "../interfaces/post";

const Home = () => {
  const [ref, inView] = useInView();
  const { data: me } = useQuery<User>("user", loadMyInfoAPI);
  const {
    data,
    isLoading: loadPostsLoading,
    fetchNextPage,
  } = useInfiniteQuery<Post[]>(
    "posts",
    ({ pageParam = "" }) => loadPostsAPI(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.[lastPage.length - 1]?.id;
      },
    }
  );

  const mainPosts = data?.pages.flat();
  // console.log("mainPosts", mainPosts);
  const isEmpty = data?.pages[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data.pages[data.pages.length - 1]?.length < 10);
  const hasMorePosts = !isEmpty || !isReachingEnd;
  const readToLoad = hasMorePosts && !loadPostsLoading;

  useEffect(() => {
    console.log("inView", inView);
    if (inView && readToLoad) fetchNextPage();
  }, [inView, readToLoad, fetchNextPage]);

  const onClickRelatedPosts = useCallback(() => {
    if (!me?.id) {
      return alert("로그인이 필요합니다.");
    }
    loadRelatedPostsAPI(me?.id)
      .then(() => {
        Router.replace("/posts/related");
      })
      .catch((error) => {
        message.error(error.response.data);
      });
  }, [me?.id]);

  return (
    <AppLayout>
      {me && me.id ? (
        <UserProfile />
      ) : (
        <PageHeader
          className="site-page-header"
          onBack={() => Router.push("/login")}
          title="이번 밀롱가에서는 어떤 일이 있었나요?"
          subTitle="로그인을 하면 Y millonga에서 제공하는 다양한 기능을 누리실 수 있습니다."
          backIcon={
            <ButtonLayout type="primary" onClick={() => Router.push("/login")}>
              <LoginOutlined />
              로그인
            </ButtonLayout>
          }
        />
      )}
      <ImgWrapper>
        <img src="/images/dancers.png" />
      </ImgWrapper>

      {me && me.id && (
        <>
          <PostForm />
          <Button
            style={{ marginBottom: 5 }}
            type="primary"
            loading={loadPostsLoading}
            onClick={onClickRelatedPosts}
          >
            팔로잉 게시글만 보기
          </Button>
        </>
      )}

      {mainPosts?.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
      <div
        ref={readToLoad ? ref : undefined}
        style={{ height: 50, backgroundColor: "yellow" }}
      />
    </AppLayout>
  );
};
//antd.less => antd customize theme

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery("posts", () => loadPostsAPI());
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Home;
