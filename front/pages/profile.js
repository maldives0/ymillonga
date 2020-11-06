import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import axios from 'axios';

import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST, } from '../reducers/user';

import wrapper from '../store/configureStore';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) return null;
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList
        header="Following"
        data={me.Followings} />
      <FollowList
        header="Follower"
        data={me.Followers} />
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
