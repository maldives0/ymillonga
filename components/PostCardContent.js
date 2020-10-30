import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
    console.log(postData.split(/(#[^|s#]+)/));
    return (
        <>
            {postData.split(/(#[^|s#]+)/g).map((v) => {
                if (v.match(/(#[^|s#]+)/)) {
                    return (
                        <Link
                            href={{
                                pathname: '/hashtag',
                                query: { tag: v.slice(1) }
                            }}
                            as={`/hashtag/${v.slice(1)}`}
                            key={v}>
                            <a>{v}</a>
                        </Link>
                    );
                }
                return v;
            })}
        </>
    );
};
PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
};
export default PostCardContent;
