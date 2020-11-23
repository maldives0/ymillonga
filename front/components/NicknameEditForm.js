import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import styled from '@emotion/styled';
const InputSearch = styled(Input.Search)`
& > .ant-input-group > .ant-input-group-addon{
    left:-8px;
}

`;
const NicknameEditForm = () => {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.user);
    const [nickname, onChangeNickname] = useInput(me?.nickname || '');
    const onSubmit = useCallback(() => {
        dispatch({
            type: CHANGE_NICKNAME_REQUEST,
            data: nickname,
        });
    }, [nickname]);
    return (
        <Form
            style={{ margin: "2px 0" }}>
            <InputSearch
                value={nickname}
                onChange={onChangeNickname}
                onSearch={onSubmit}
                addonBefore="닉네임:"
                enterButton="바꾸기" />
        </Form>
    );
};
export default NicknameEditForm; 