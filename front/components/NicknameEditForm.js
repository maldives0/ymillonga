import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import { nicknameInputSearch } from './style';

const NicknameEditForm = () => {
    const dispatch = useDispatch();
    const me = useSelector(state => state.user.me);
    const changeNicknameLoading = useSelector(state => state.user.changeNicknameLoading);
    const [nickname, onChangeNickname] = useInput(me?.nickname || '');
    const onSubmit = useCallback(() => {
        dispatch({
            type: CHANGE_NICKNAME_REQUEST,
            data: nickname,
        });
    }, [nickname]);
    return (
        <Form>
            <nicknameInputSearch
                loading={changeNicknameLoading}
                value={nickname}
                onChange={onChangeNickname}
                onSearch={onSubmit}
                addonBefore="닉네임:"
                enterButton="바꾸기" />
        </Form>
    );
};
export default NicknameEditForm; 