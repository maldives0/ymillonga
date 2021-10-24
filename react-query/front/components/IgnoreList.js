import React, { useCallback } from 'react';
import { Button, List, Avatar } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { UNIGNORE_REQUEST } from '../reducers/user';
import { LoadMore } from './style';
const IgnoreList = ({ header, data, onClickMore }) => {

    const dispatch = useDispatch();
    const onCancel = useCallback((id) => () => {
        dispatch({
            type: UNIGNORE_REQUEST,
            data: id,
        });
    }, []);
    const loadMore = (
        <LoadMore>
            <Button onClick={onClickMore}>더보기</Button>
        </LoadMore>
    );
    return (

        <List
            style={{ marginBottom: 20 }}
            header={<div>{header}</div>}
            dataSource={data}
            itemLayout="horizontal"
            loadMore={loadMore}
            bordered
            renderItem={(item) => (
                <List.Item
                    key={`ignoringlist_${item.id}`}
                    actions={[
                        <a key={`post_${item.id}`}
                            href={`/user/${item.id}`}>게시글 보기</a>,
                        <a key={`unIngored_${item.id}`}
                            onClick={onCancel(item.id)}>차단풀기</a>]}
                >

                    <List.Item.Meta
                        avatar={
                            (<Link
                                prefetch={false}
                                href={`/user/${item.id}`}>
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

IgnoreList.propTypes = {
    header: PropTypes.string.isRequire,
    data: PropTypes.array.isRequire,
    onClickMore: PropTypes.func.isRequire,
};
export default IgnoreList; 
