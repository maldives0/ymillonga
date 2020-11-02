import React, { useEffect } from 'react';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  console.log(me);
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
