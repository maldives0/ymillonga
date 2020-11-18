import React, { useState } from 'react';

import dummyUser from '../swr/user';
import dummyPost from '../swr/post';

import useSWR from 'swr';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {

    const { data: userData } = useSWR("dummyUserState", { initialData: dummyUser });
    const [me, setMe] = useState((userData || {}).me);
    if (!userData) null;

    const { data: postData } = useSWR("dummyPostState", { initialData: dummyPost });

    const [mainPosts, setmainPosts] = useState((postData || {}).mainPosts);
    if (!postData) null;



    return (
        <AppLayout>

            {me && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c} />
                );
            })}

        </AppLayout>
    );
};
export default Home; 