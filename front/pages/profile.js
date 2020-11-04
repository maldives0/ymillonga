import React, { useEffect } from 'react';

import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';
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

export default Profile;
