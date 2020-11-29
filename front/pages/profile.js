import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import FollowList from '../components/FollowList';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';


const Profile = () => {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.user);
    const loadMoreFollowings = useCallback(() => {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        });
    }, []);
    const loadMoreFollowers = useCallback(() => {
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
        });
    }, []);
    useEffect(() => {
        if (!(me && me.id)) {
            alert('로그인이 필요합니다.');
            Router.replace('/login')
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
                header="팔로잉"
                data={me.Followings}
                onClickMore={loadMoreFollowings} />
            <FollowList
                header="팔로워"
                data={me.Followers}
                onClickMore={loadMoreFollowers} />
        </AppLayout>
    );
};
export default Profile; 