import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import CommentForm from './CommentForm';
const PostCard = () => {
    return (
        <CardWrapper>
            <Card
                cover={<PostImages />}
            ></Card>
            <CommentForm />
            <List></List>
        </CardWrapper>

    );
};
export default PostCard;