import React from 'react';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

import AppLayout from '../components/AppLayout';

const Profile = () => {

  const followerList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  const followingList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList
        header="팔로잉 목록"
        data={followingList} />
      <FollowList
        header="팔로잉 목록"
        data={followerList} />
    </AppLayout>
  );
};

export default Profile;
