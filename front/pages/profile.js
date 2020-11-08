import React, { useEffect, useState, useCallback } from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import useSWR from 'swr';

import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { LOAD_MY_INFO_REQUEST, } from '../reducers/user';

import wrapper from '../store/configureStore';
import { useSelector } from 'react-redux';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);//http://localhost:3065/user/followers 이 주소를 실제로 어떻게 가져올지를 적어준다. 백엔드에 url을 받아서 axios로 요청을 보낸다. result.data에 folloers list가 담겨서 온다

const Profile = () => {

  const { me } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);

  const { data: followersData, error: followerError } = useSWR(`http://localhost:3065/user/followers?limit=${followersLimit}`, fetcher);
  const { data: followingsData, error: followingError } = useSWR(`http://localhost:3065/user/followings?limit=${followingsLimit}`, fetcher);


  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);
  if (!me) return '내 정보 로딩중...';
  // useEffect hooks가 return보다 뒤에 있으면 안된다//항상 같은 수의 hooks가 실행되지 않으면 에러가 발생한다
  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>;
  }


  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList
        header="Following"
        data={followingsData}
        onClickMore={loadMoreFollowings}
        loading={!followingsData && !followingError} />
      <FollowList
        header="Follower"
        data={followersData}
        onClickMore={loadMoreFollowers}
        loading={!followersData && !followerError} />
    </AppLayout>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log('context?', context);
  const cookie = context.req ? context.req.headers.cookie : '';

  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {

    axios.defaults.headers.Cookie = cookie;//
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();

});
export default Profile;
