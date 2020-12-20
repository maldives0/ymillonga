import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import { NicknameInputSearch } from './style';
import { initialState } from "../reducers/user";
import useSWR, { mutate, trigger } from "swr"
const NicknameEditForm = () => {
    const { data } = useSWR("globalState", { initialData: initialState }, { revalidateOnFocus: true })
    const dispatch = useDispatch();
    const me = useSelector(state => state.user.me);
    const changeNicknameLoading = useSelector(state => state.user.changeNicknameLoading);
    const [nickname, onChangeNickname] = useInput(me?.nickname || '');
    const onSubmit = useCallback(() => {
        mutate("globalState", {
            ...data,
            me: { nickname: nickname }
        }, false)
        dispatch({
            type: CHANGE_NICKNAME_REQUEST,
            data: nickname,
        });
        trigger("globalState");
    }, [nickname]);
    return (
        <Form>
            <NicknameInputSearch
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