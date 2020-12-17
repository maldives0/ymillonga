import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar } from 'antd';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';

const User = () => {
    const router = useRouter();
    const { id } = router.query;//next 다이나믹 라우팅으로 특정 사용자id값을 query로 가져올 수 있다
    const dispatch = useDispatch();
    const mainPosts = useSelector((state) => state.post.mainPosts);
    const hasMorePosts = useSelector((state) => state.post.hasMorePosts);
    const loadPostsLoading = useSelector((state) => state.post.loadPostsLoading);
    const reportPostDone = useSelector((state) => state.post.reportPostDone);
    const reportPostError = useSelector((state) => state.post.reportPostError);

    const me = useSelector(state => state.user.me);
    const userInfo = useSelector(state => state.user.userInfo);

    useEffect(() => {
        if (reportPostDone) {
            message.success('신고가 접수되었습니다. 빠른 시일 내로 조치하겠습니다.');
        }
        if (reportPostError) {
            message.error(reportPostError);
        }
    }, [reportPostDone, reportPostError]);

    useEffect(() => {
        function onScroll() {

            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_USER_POSTS_REQUEST,
                        lastId,
                        data: id,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            //쌓여있는 이벤트 메모리를 제거해주기
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts.length, hasMorePosts, loadPostsLoading, id]);
    //og:카카오톡에 나오는 정보
    console.log('userInfo', userInfo);
    return (
        <AppLayout>
            {userInfo && (
                <Head>
                    <title>{userInfo.nickname}님의 글</title>
                    <meta name="description" content={`${userInfo.nickname}님의 게시글`} />
                    <meta property="og:title" content={`${userInfo.nickname}님의 게시글`} />
                    <meta property="og:description" content={`${userInfo.nickname}님의 게시글`} />
                    <meta property="og:image" content="https://ymillonga.com/favicon.ico" />
                    <meta property="og:url" content={`https://ymillonga.com/user/${id}`} />
                </Head>
            )}
            {userInfo && (userInfo.id !== me?.id) ? (
                <Card
                    style={{ marginBottom: 20 }}
                    actions={[
                        <div key="twit">
                            게시글
                            <br />{userInfo.Posts}
                        </div>,
                        <div key="following">
                            팔로잉
                            <br />{userInfo.Followings}
                        </div>,
                        <div key="follower">
                            팔로워
                            <br />{userInfo.Followers}
                        </div>,
                    ]}
                >
                    <Card.Meta
                        avatar={
                            (<Avatar>
                                {userInfo.nickname[0]}</Avatar>)
                        }
                        title={userInfo.nickname}
                    />
                </Card>
            ) : null}
            {mainPosts?.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: context.params.id,//context.query.id와 함께 router.query를 통해 가져온 특정 유저 아이디 값을 가져올 수 있다
    });
    context.store.dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default User; 
