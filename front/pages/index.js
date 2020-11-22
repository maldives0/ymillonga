import React from 'react';

import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';

const Home = () => {


    const { mainPosts } = useSelector(state => state.post);
    const { me } = useSelector(state => state.user);


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