import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { useRouter } from 'next/router';


const Hashtag = () => {
    const router = useRouter();
    const { tag } = router.query;//next 다이나믹 라우팅으로 특정 사용자id값을 query로 가져올 수 있다
    const dispatch = useDispatch();
    const mainPosts = useSelector((state) => state.user.mainPosts);
    const hasMorePosts = useSelector((state) => state.user.hasMorePosts);
    const loadPostsLoading = useSelector((state) => state.user.loadPostsLoading);

    useEffect(() => {
        function onScroll() {

            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_HASHTAG_POSTS_REQUEST,
                        lastId,
                        data: tag,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            //쌓여있는 이벤트 메모리를 제거해주기
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts?.length, hasMorePosts, loadPostsLoading, tag]);
    //og:카카오톡에 나오는 정보
    return (
        <AppLayout>
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
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: context.params.tag,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Hashtag; 
