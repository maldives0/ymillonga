import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import PostForm from '../../components/PostForm';
import PostCard from '../../components/PostCard';
import UserProfile from '../../components/UserProfile';
import { LOAD_RELATED_POSTS_REQUEST, } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST, } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import Link from 'next/link';
import { message, Button } from 'antd';
const Home = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const mainPosts = useSelector((state) => state.post.mainPosts);
    const hasMorePosts = useSelector((state) => state.post.hasMorePosts);
    const loadPostsLoading = useSelector((state) => state.post.loadPostsLoading);
    const loadPostsDone = useSelector((state) => state.post.loadPostsDone);
    const reportPostDone = useSelector((state) => state.post.reportPostDone);
    const reportPostError = useSelector((state) => state.post.reportPostError);
    const retweetError = useSelector((state) => state.post.retweetError);
    const me = useSelector(state => state.user.me);

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
        function onScroll() {

            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_RELATED_POSTS_REQUEST,
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
            {me && me.id && <Button>
                <Link href='/'><a>전체 게시글 보기</a></Link>
            </Button>}

            {me && me.id && <UserProfile />}
            {me && <PostForm />}
            {mainPosts?.map((post) => {
                return (
                    <PostCard key={post.id} post={post} />
                );
            })}
        </AppLayout>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {//redux는 next 서버 메소드 4개와 쓸 때 문제가 있어서 wrapper-redux를 사용하기//Component보다 먼저 실행된다(FE에서만 실행된다 FE-> BE, Home component는 BS와 FE 둘다에서 실행된다 )
    console.log('getServerSideProps start');
    // bs=>be는 bs로부터 axios에 cookie에 자동으로 담겨 be로 보내진다
    //fe=>be로 보낼 때는 따로 설정을 해주어야 한다
    const cookie = context.req ? context.req.headers.cookie : ''; //서버일 때만 쿠키값을 담아서
    axios.defaults.headers.Cookie = '';//다른 bs에서 요청을 보내면 fe server에 공유되고 있는 쿠키값을 지워야 한다
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_RELATED_POSTS_REQUEST,
    });//리덕스에 데이터가 채워진 상태로 component가 렌더링된다
    context.store.dispatch(END);//미리 준비된 액션인 END를 가져와서 
    await context.store.sagaTask.toPromise();//store.sagaTask를 사용해 success해서 데이터를 가져올 때까지 기다리도록 한다
});
//초기값=>getServerSideProps=> hydrate실행=> payload안에 결과가 담김
//getStaticProps는 미리 만들어진 HTML를 가져온다(바뀌지 않는 게시글 같은 것을 불러올 때 쓴다)
//getServerSideProps는 방문할 때마다 불러온다
export default Home; 