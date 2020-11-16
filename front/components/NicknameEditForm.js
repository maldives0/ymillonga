import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { Form, Input } from 'antd';

const NicknameEditForm = () => {
    const [nickname, onChangeNickname] = useInput('');
    const onSubmit = useCallback(() => { }, []);
    return (
        <Form>
            <Input.Search
                value={nickname}
                onChange={onChangeNickname}
                onSearch={onSubmit}
                addonBefore="닉네임 "
                enterButton="수정하기" />
        </Form>
    );
};
export default NicknameEditForm; 