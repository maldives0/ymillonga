import React, { useCallback, useEffect } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import { NicknameInputSearch } from './style';
import { initialState } from "../reducers/user";
import useSWR, { mutate, trigger } from "swr"
const NicknameEditForm = ({ onCancel }) => {
    const { data } = useSWR("globalState", { initialData: initialState }, { revalidateOnFocus: true })
    const dispatch = useDispatch();
    const me = useSelector(state => state.user.me);
    const changeNicknameLoading = useSelector(state => state.user.changeNicknameLoading);
    const changeNicknameError = useSelector(state => state.user.changeNicknameError);
    const [nickname, onChangeNickname] = useInput(me?.nickname || '');

    useEffect(() => {
        if (changeNicknameError) {
            message.error(changeNicknameError, 5);
        }
    }, [changeNicknameError]);
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
        <Form onFinish={onSubmit}>
            <Row>
                <Col>
                    <Form.Item
                        label="닉네임"
                        rules={[
                            { required: true, },
                        ]}
                    >
                        <NicknameInputSearch
                            value={nickname}
                            required
                            onChange={onChangeNickname}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={16} offset={6}>
                    <Button
                        htmlType="submit"
                        loading={changeNicknameLoading}
                        type="primary"
                    >바꾸기</Button>

                    <Button
                        style={{ marginLeft: 5 }}
                        className="nickname-cancel-button" onClick={onCancel}>취소하기</Button>
                </Col>
            </Row>
        </Form>
    );
};
NicknameEditForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
};
export default NicknameEditForm; 