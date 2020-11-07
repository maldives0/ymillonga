import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { END } from 'redux-saga';

import { useRouter } from 'next/router';

import axios from 'axios';
import wrapper from '../../store/configureStore';

import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';

const Hashtag = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { tag } = router.query;
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_HASHTAG_POSTS_REQUEST,
                        lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
                        data: tag,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [hasMorePosts, tag, mainPosts.length, loadPostsLoading]);



    return (
        <AppLayout>
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const cookie = context.req ? context.req.headers.cookie : '';

    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {

        axios.defaults.headers.Cookie = cookie;//
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