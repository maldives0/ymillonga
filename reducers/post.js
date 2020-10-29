export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '주영',
        },
        content: 'first post',
        Image: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'wow'
            },
            content: 'wowwow',
        }, {
            User: {
                nickname: 'oohh'
            },
            content: 'oooohh',
        }]
    }],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST
};
const dummyPost = {
    id: 2,
    content: 'dummy data',
    User: {
        id: 1,
        nickname: 'momo',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        }
        default:
            return state;
    }
};
export default reducer;