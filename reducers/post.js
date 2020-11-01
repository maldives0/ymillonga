import shortId from 'shortid';
import produce from 'immer';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'momo',
        },
        content: 'first post #해시태그 #익스프레스',
        Images: [{
            id: shortId.generate(),
            src: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE'
        }, {
            id: shortId.generate(),
            src: 'https://blog.jinbo.net/attach/615/200937431.jpg',
        }, {
            id: shortId.generate(),
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzIiKMQJjundNhRhkqo-VwfcUKKIzWlulhpQ&usqp=CAU',
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'wow'
            },
            content: 'wowwow',
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'oohh'
            },
            content: 'oooohh',
        }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';


export const addPostRequestAction = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});
export const removePostRequestAction = (data) => ({
    type: REMOVE_POST_REQUEST,
    data,
});
export const addCommentRequestAction = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});
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
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'momo',
    },


});
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };

        case ADD_POST_FAILURE:
            return {
                addPostLoading: false,
                addPostError: action.error,
            };
        case REMOVE_POST_REQUEST:
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removePostError: null,
            };
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                removePostLoading: false,
                removePostDone: true,
            };

        case REMOVE_POST_FAILURE:
            return {
                removePostLoading: false,
                removePostError: action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS: {

            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);

            const post = { ...state.mainPosts[postIndex] };

            post.Comments = [dummyComment(action.data.content), ...post.Comments];

            const mainPosts = [...state.mainPosts];

            mainPosts[postIndex] = post;

            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        }
        case ADD_COMMENT_FAILURE:
            return {
                addCommentLoading: false,
                addCommentError: action.error,
            };
        default:
            return state;
    }
};
export default reducer;