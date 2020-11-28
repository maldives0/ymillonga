import React, { useCallback } from 'react';
import { Button, List, Avatar } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';

const FollowList = ({ header, data, onClickMore }) => {

    const dispatch = useDispatch();
    const onCancel = (id) => () => {
        console.log(id);
        if (header === 'following') {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: id
            });
        }
        dispatch({
            type: REMOVE_FOLLOWER_REQUEST,
            data: id,
        });
    };
    const loadMore = (
        <div
            style={{
                textAlign: 'center',
                margin: '10px 0',
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={onClickMore}>더보기</Button>
        </div>
    );
    return (

        <List
            style={{ marginBottom: 20 }}
            header={<div>{header.toUpperCase()}</div>}
            dataSource={data}
            itemLayout="horizontal"
            loadMore={loadMore}
            bordered
            renderItem={(item) => (
                <List.Item
                    actions={[
                        <a key="post">게시글 보기</a>,
                        <a key="stop" onClick={onCancel(item.id)}>연결 끊기</a>]}
                >

                    <List.Item.Meta
                        avatar={
                            (<Link href={`/user/${item.id}`}>
                                <a><Avatar>
                                    {item.nickname[0]}
                                </Avatar></a>
                            </Link>)
                        }
                        title={item.nickname}
                    />
                </List.Item>
            )}
        />

    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequire,
    data: PropTypes.array.isRequire,
    onClickMore: PropTypes.func.isRequire,

}
export default FollowList; 
