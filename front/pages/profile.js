import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import FollowList from '../components/FollowList';


const Profile = () => {
    const { me } = useSelector(state => state.user);
    useEffect(() => {
        if (!(me && me.id)) Router.push('/');
    }, [me && me.id]);
    const loadMoreFollowings = useCallback(() => { }, []);
    const loadMoreFollowers = useCallback(() => { }, []);
    return (
        <AppLayout>
            <UserProfile />
            <FollowList
                header="following"
                data={me.Followings}
                onClickMore={loadMoreFollowings} />
            <FollowList
                header="follower"
                data={me.Followers}
                onClickMore={loadMoreFollowers} />
        </AppLayout>
    );
};
export default Profile; 