import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';

import { Avatar, Card } from 'antd';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';

const Profile = () => {
    const { userInfo } = useSelector((state) => state.user);

    return (
        <AppLayout>
            <Head>
                <title>juyoung | nodebird</title>
            </Head>
            {userInfo ? (
                <Card
                    actions={[
                        <div key="twit">짹짹
                    <br />
                            {userInfo.Posts}</div>, <div key="following">팔로잉
                    <br />
                            {userInfo.Followings}</div>, <div key="follower">팔로워
                    <br />
                            {userInfo.Followers}</div>,

                    ]}
                >
                    <Card.Meta
                        avatar={
                            <Avatar>{userInfo.nickname[0]}

                            </Avatar>
                        }
                        title={userInfo.nickname}
                        description="노드버드마니아" />
                </Card>
            ) : null}
        </AppLayout>
    );
};

export const getStaticProps = wrapper.getStaticProps(async (context) => {
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: 1,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});//언제 접속하던 데이터가 변하지 않으면 getStaticProps , 접속할 때마다 데이터가 변하면 getServerSideProps를 쓴다, 블로그 게시글에서 씀, build할 때 서버에서 해당 게시글의 html형태를 만들어주어 불러올 때마다 해당 html을 불러온다, 반면 serversideprops는 사용자가 방문하면 그때 back으로 데이터를 받아와 화면을 rendering한다, 실시간 뉴스, 실시간 검색어가 있는 네이버 메인 페이지의 경우, 개인화 페이지(로그인 시 화면)
export default Profile;