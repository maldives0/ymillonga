import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Input, Button } from 'antd';


const { TextArea } = Input;
const PostCardContent = ({ postData, editMode, onCancelUpdate, onChangePost }) => {
    const [editText, setEditText] = useState(postData);
    const { updatePostLoading, updatePostDone } = useSelector((state) => state.post);
    const onChangeText = useCallback((e) => {
        setEditText(e.target.value);
    }, []);
    useEffect(() => {
        if (updatePostDone) {
            onCancelUpdate();
        }
    }, [updatePostDone]);
    return (
        <div>
            {editMode ? (
                <>
                    <TextArea value={editText} onChange={onChangeText} />
                    <Button.Group>
                        <Button loading={updatePostLoading} onClick={onChangePost(editText)}>update</Button>}
                        <Button type="danger"
                            onClick={onCancelUpdate}>cancel</Button>


                    </Button.Group>
                </>
            )
                :
                postData.split(/(#[^\s#]+)/g).map((v) => {
                    if (v.match(/(#[^\s#]+)/)) {
                        return (
                            <Link
                                href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
                                prefetch={false}
                                as={`/hashtag/${v.slice(1)}`}
                                key={v}
                            >
                                <a>{v}</a>
                            </Link>
                        );
                    }
                    return v;
                })
            }

        </div>
    )
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