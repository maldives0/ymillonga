import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import FollowList from '../components/FollowList';


const Profile = () => {

    const { me } = useSelector(state => state.user);
    const loadMoreFollowings = useCallback(() => { }, []);
    const loadMoreFollowers = useCallback(() => { }, []);
    useEffect(() => {
        if (!(me && me.id)) {
            alert('로그인이 필요합니다.');
            Router.push('/')
        };
    }, [me && me.id]);
    if (!me) { return null };

    return (
        <AppLayout>
            <Head>
                <title>내 프로필 | Ymillonga</title>
            </Head>
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