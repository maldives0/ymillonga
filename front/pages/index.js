import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import UserProfile from '../components/UserProfile';
import { LOAD_POSTS_REQUEST, LOAD_RELATED_POSTS_REQUEST, } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { PageHeader, message, Button } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
const Home = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const mainPosts = useSelector((state) => state.post.mainPosts);
    const hasMorePosts = useSelector((state) => state.post.hasMorePosts);
    const loadPostsLoading = useSelector((state) => state.post.loadPostsLoading);
    const reportPostDone = useSelector((state) => state.post.reportPostDone);
    const reportPostError = useSelector((state) => state.post.reportPostError);
    const retweetError = useSelector((state) => state.post.retweetError);
    const me = useSelector(state => state.user.me);

    const loadMyInfoError = useSelector(state => state.user.loadMyInfoError);
    const ignoreError = useSelector(state => state.user.ignoreError);
    const unIgnoreError = useSelector(state => state.user.unIgnoreError);
    const ignoreDone = useSelector(state => state.user.ignoreDone);
    const unIgnoreDone = useSelector(state => state.user.unIgnoreDone);


    const onClickRelatedPosts = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        dispatch({
            type: LOAD_RELATED_POSTS_REQUEST,
        });
    }, [id]);

    useEffect(() => {
        if (ignoreDone) {
            message.success('차단되었습니다.', 5)
        }
        if (ignoreError) {
            message.error(ignoreError, 5)
        }
    }, [ignoreDone, ignoreError])
    useEffect(() => {
        if (unIgnoreDone) {
            message.success('차단이 풀어졌습니다.', 5)
        }
        if (unIgnoreError) {
            message.error(unIgnoreError, 5)
        }
    }, [unIgnoreDone, unIgnoreError])


    useEffect(() => {
        if (reportPostDone) {
            message.success('신고가 접수되었습니다. 빠른 시일 내로 조치하겠습니다.', 5);
        }
        if (reportPostError) {
            message.error(reportPostError, 5);
        }
    }, [reportPostDone, reportPostError]);
    useEffect(() => {
        if (retweetError) {
            alert(retweetError);
        }
    }, [retweetError]);
    useEffect(() => {
        if (loadMyInfoError) {
            Router.replace('/')
        }
    }, [loadMyInfoError]);
    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            //쌓여있는 이벤트 메모리를 제거해주기
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts, hasMorePosts, loadPostsLoading]);

    return (
        <AppLayout>
            {me && me.id && <Button
                style={{ marginBottom: 5 }}
                loading={loadPostsLoading}
                onClick={onClickRelatedPosts}>
                <Link href='/posts/related'><a>팔로잉 게시글만 보기</a></Link></Button>}
            {me && me.id && <UserProfile />}
            {me ? <PostForm /> : (
                <PageHeader
                    className="site-page-header"
                    onBack={() => Router.push('/login')}
                    title="당신의 밀롱가 경험을 공유해주세요!"
                    subTitle="로그인 후 게시글을 작성해보세요."
                />
            )}
            {mainPosts?.map((post) => {
                return (
                    <PostCard key={post.id} post={post} />
                );
            })}
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
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Home; 