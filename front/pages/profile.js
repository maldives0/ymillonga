import React, { useCallback, useState } from 'react';

import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import FollowList from '../components/FollowList';


const Profile = () => {

    const loadMoreFollowings = useCallback(() => { }, []);
    const loadMoreFollowers = useCallback(() => { }, []);
    return (
        <AppLayout>
            <UserProfile />
            <FollowList
                header="following"
                data="data"
                onClickMore={loadMoreFollowings} />
            <FollowList
                header="follower"
                data="data"
                onClickMore={loadMoreFollowers} />
        </AppLayout>
    );
};
export default Profile; 