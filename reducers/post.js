export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '주영',
        },
        content: 'first post #해시태그 #익스프레스',
        Images: [{
            src: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE'
        }, {
            src: 'https://blog.jinbo.net/attach/615/200937431.jpg',
        }, {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzIiKMQJjundNhRhkqo-VwfcUKKIzWlulhpQ&usqp=CAU',
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
    type: ADD_POST,

};
const dummyPost = {
    id: 2,
    content: 'dummy data',
    User: {
        id: 2,
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