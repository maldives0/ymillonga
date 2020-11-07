import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';

import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state) => state.post);

  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);


  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c.id} post={c} />
        );
      })}
    </AppLayout>
  );
};// browser와 front서버에서 작동됨

// Home.getInitialProps;
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log('context?', context);
  const cookie = context.req ? context.req.headers.cookie : '';
  //front 서버가 실행되면 context.req 값이 생긴다
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    //우리가 쿠키를 가지고 서버에 요청을 보낼 때만 실행하고 아닐 때는 서버에서 공유하고 있는 쿠키를 지운다, 그러지 않으면 다른 사람이 내 브라우저로 왔을 때 내 아이디로 로그인되는 오류가 발생한다
    axios.defaults.headers.Cookie = cookie;//브라우저에서 backend로 쿠키를 보낼 때는 자동으로 headers에 cookie를 담아서 보내지만 front에서 보낼 때는 axios에 값을 넣어 보내주어야 한다
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,

  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
  //END :미리 준비된 액션, user와 post가 request후 success되기까지 기다리도록 한다
});//Home보다 먼저 실행된다
//front서버에서만 작동됨
export default Home;
