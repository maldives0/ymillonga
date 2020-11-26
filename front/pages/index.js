import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';


const Home = () => {
    const dispatch = useDispatch();
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(state => state.post);
    const { me } = useSelector(state => state.user);
    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST
        });
    }, []);
    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST
        });
    }, []);
    useEffect(() => {
        function onScroll() {

            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        // data: mainPosts[mainPosts.length - 1].id,
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

            {me && <PostForm />}
            {mainPosts?.map((post) => {
                return (
                    <PostCard key={post.id} post={post} />
                );
            })}

        </AppLayout>
    );
};
export default Home; 