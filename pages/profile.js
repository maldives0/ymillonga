import React from 'react';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { me } = useSelector((state) => state.user);

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
