import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import { useSelector } from 'react-redux';
const { TextArea } = Input;

const PostCardContent = ({ postData, editMode, onCancelUpdate, onChangePost }) => {
    const updatePostLoading = useSelector(state => state.post.updatePostLoading);
    const updatePostDone = useSelector(state => state.post.updatePostDone);

    const [editText, setEditText] = useState(postData);

    useEffect(() => {
        if (updatePostDone) {
            onCancelUpdate();
        }
    }, [updatePostDone]);
    const onChangeText = useCallback((e) => {
        setEditText(e.target.value);
    }, []);
    //prefetch를 false로 해야 미리 build 되지 않는다
    return (
        <div>
            {editMode ? (
                <>
                    <TextArea value={editText} onChange={onChangeText} />
                    <Button.Group>
                        <Button
                            loading={updatePostLoading}
                            onClick={onChangePost(editText)}>수정하기</Button>
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