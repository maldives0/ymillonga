import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Input, Button } from 'antd';
const { TextArea } = Input;


const PostCardContent = ({ postData, editMode, onCalcelUpdate, onChangePost }) => {

    const [editText, setEditText] = useState(postData);
    const onChangeText = useCallback((e) => {
        setEditText(e.target.value);
    }, []);

    return (
        <div>
            {editMode ? (
                <>
                    <TextArea value={editText} onChange={onChangeText} />
                    <Button.Group>
                        <Button onClick={onChangePost(editText)}>수정하기</Button>
                        <Button type="danger"
                            onClick={onCancelUpdate}>
                            취소하기
                    </Button>
                    </Button.Group>
                </>
            ) :
                postData?.split(/(#[^\s#]+)/g).map((v) => {
                    if (v.match(/(#[^\s#]+)/)) {
                        return (
                            <Link
                                href={{
                                    pathname: '/hashtag',
                                    query: { tag: v.slice(1) }
                                }}
                                as={`/hashtag/${v.slice(1)}`
                                }
                                prefetch={false}
                                key={v}>
                                <a>{v}</a>
                            </Link>
                        );
                    }
                    return v;
                })}

        </div>
    );
};
PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
    editMode: PropTypes.bool,
    onCancelUpdate: PropTypes.func.isRequired,
    onChangePost: PropTypes.func.isRequired,
};
PostCardContent.defaultProps = {
    editMode: false,
};
export default PostCardContent; 