import React from 'react';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';
import { useDispatch } from 'react-redux';

const FollowList = ({ header, data }) => {

    const dispatch = useDispatch();
    const onCancel = (id) => () => {//반복문에서 고차함수로 매개변수를 첫번째 괄호에 가져올 수 있다
        if (header === 'Following') {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: id,
            });
        }

        dispatch({
            type: REMOVE_FOLLOWER_REQUEST,
            data: id,
        });
    };


    return (
        <List
            style={{ marginBottom: '20px' }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>more</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item) => (

                <List.Item style={{ marginTop: '20px' }}>
                    <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />

    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}
export default FollowList;