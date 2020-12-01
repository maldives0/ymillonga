import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import FollowList from '../components/FollowList';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
import useSWR from 'swr';
import { backUrl } from '../config/config';
import fetcher from '../utils/fetcher';

const Profile = () => {
    const [followingsLimit, setFollowingsLimit] = useState(3);
    const [followersLimit, setFollowersLimit] = useState(3);
    const { data: followingsData, error: followingError } = useSWR(`${backUrl}/user/followings?limit=${followingsLimit}`, fetcher);
    const { data: followersData, error: followerError } = useSWR(`${backUrl}/user/followers?limit=${followersLimit}`, fetcher);
    const { me } = useSelector(state => state.user);

    useEffect(() => {
        if (!(me && me.id)) {
            alert('로그인이 필요합니다.');
            Router.replace('/login')
        };
    }, [me && me.id]);
    const loadMoreFollowings = useCallback(() => {
        setFollowingsLimit((prev) => prev + 3);
    }, []);
    const loadMoreFollowers = useCallback(() => {
        setFollowersLimit((prev) => prev + 3);
    }, []);

    if (!me) { return <div style={{ width: '100%', marginTop: '20px', textAlign: 'center' }}>'로그인 페이지로 이동합니다'</div> };
    if (followerError || followingError) {
        console.error(followerError || followingError);
        return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
    }


    return (
        <AppLayout>
            <Head>
                <title>내 프로필 | Ymillonga</title>
            </Head>
            <UserProfile />
            <FollowList
                header="팔로잉"
                data={followingsData}
                loading={!followingsData && !followingError}
                onClickMore={loadMoreFollowings} />
            <FollowList
                header="팔로워"
                data={followersData}
                loading={!followersData && !followerError}
                onClickMore={loadMoreFollowers} />
        </AppLayout>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log('getServerSideProps start');
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log('getServerSideProps end');
    await context.store.sagaTask.toPromise();
});
export default Profile; 