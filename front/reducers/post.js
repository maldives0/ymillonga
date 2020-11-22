import faker from 'faker';
import produce from 'immer';
import { nanoid } from 'nanoid';

export const initialState = {

    mainPosts: [
        {
            id: 1,//게시글 아이디
            User: {//게시글 작성자 
                id: 1,
                nickname: 'momo',
            },
            content: '첫 번째 게시글 #first',
            Images: [{
                src: faker.image.image(),
            },
            {
                src: faker.image.image(),
            }, {
                src: faker.image.image(),
            }
            ],
            Likers: [],
            Comments: [{
                User: {
                    id: nanoid(),
                    nickname: faker.name.findName(),
                },
                content: faker.lorem.sentence(),
            }],
        }
    ],
    // mainPosts: [],
    imagePaths: [],
    hasMorePosts: true,
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,
    retweetLoading: false,
    retweetDone: false,
    retweetError: null,

};
// mainPosts: [{
//     id: 1,//게시글 아이디
//     User: {//게시글 작성자 
//         id: 1,
//         nickname: 'momo',
//     },
//     content: '첫 번째 게시글 #first',
//     Images: [{
//         src: faker.image.image(),
//     },
//     {
//         src: faker.image.image(),
//     }, {
//         src: faker.image.image(),
//     }
//     ],
//     Likers: [],
//     Comments: [{
//         User: {
//             id: nanoid(),
//             nickname: faker.name.findName(),
//         },
//         content: faker.lorem.sentence(),
//     }],
// }],
const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: 'momo',
    },
    Images: [],
    Comments: [],
});
const dummyComment = (data) => ({
    id: nanoid(),
    User: {
        id: 2,
        nickname: 'soso',
    },
    content: data,
});
export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: nanoid(),
    User: {
        id: nanoid(),
        nickname: faker.name.findName(),
    },
    content: faker.lorem.paragraph(),
    Images: [{
        src: faker.image.image(),
    }],
    Comments: [{
        User: {
            id: nanoid(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
}));

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            draft.addPostLoading = true;
            draft.addPostDone = false;
            draft.addPostError = null;
            break;
        case ADD_POST_SUCCESS:
            draft.addPostLoading = false;
            draft.addPostDone = true;
            draft.mainPosts.unshift(dummyPost(action.data));
            draft.imagePaths = [];//대기중 파일 목록 없애기
            break;
        case ADD_POST_FAILURE:
            draft.addPostLoading = true;
            draft.addPostError = action.error;
            break;
        case ADD_COMMENT_REQUEST:
            draft.addCommentLoading = true;
            draft.addCommentDone = false;
            draft.addCommentError = null;
            break;
        case ADD_COMMENT_SUCCESS:
            draft.addCommentLoading = false;
            draft.addCommentDone = true;
            const post = draft.mainPosts.find((v) => v.id === action.data.postId);
            post.Comments.unshift(dummyComment(action.data.content));
            break;
        case ADD_COMMENT_FAILURE:
            draft.addCommentLoading = true;
            draft.addCommentError = action.error;
            break;
        case REMOVE_POST_REQUEST:
            draft.removePostLoading = true;
            draft.removePostDone = false;
            draft.removePostError = null;
            break;
        case REMOVE_POST_SUCCESS:
            console.log(action.data, 'post.id');
            draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
            draft.removePostLoading = false;
            draft.removePostDone = true;
            break;
        case REMOVE_POST_FAILURE:
            draft.removePostLoading = true;
            draft.removePostError = action.error;
            break;
        default:
            break;
    }
});
export default reducer;