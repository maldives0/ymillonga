import React, { useCallback } from 'react';
import { Button, List, Avatar } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

const FollowList = ({ header, onClickMore }) => {
    const onCancel = (id) => () => {
        if (header === 'following') {
            console.log('following');
        }
        console.log('follower');
    };
    const loadMore = (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={onClickMore}>more</Button>
        </div>
    );
    return (

        <List
            header={<div>{header}</div>}
            itemLayout="horizontal"
            loadMore={loadMore}

            renderItem={item => (
                <List.Item
                    actions={[
                        <a key="post">게시글 보기</a>,
                        <a key="stop" onClick={onCancel(item.id)}>연결 끊기</a>]}
                >

                    <List.Item.Meta
                        avatar={
                            (<Link><a><Avatar></Avatar></a></Link>)
                        }
                        title="{item.nickname}"
                    />
                    <>content</>

                </List.Item>
            )}
        />

    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequire,
    onClickMore: PropTypes.func.isRequire,

}
export default FollowList; 