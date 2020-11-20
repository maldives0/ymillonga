import faker from 'faker';
import produce from 'immer';
import { nanoid } from 'nanoid';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
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
        }],
        Likers: [],
        Comments: [{
            User: {
                id: nanoid(),
                nickname: faker.name.findName(),
            },
            content: faker.lorem.sentence(),
        }],
    }],
    imagePaths: [],

};
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

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';


const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            draft.addPostLoading = true;
            draft.addPostDone = false;
            draft.addPostError = null;
        case ADD_POST_SUCCESS:
            draft.addPostLoading = false;
            draft.addPostDone = true;
            draft.mainPosts.unshift(action.data);
            draft.imagePaths = [];
        case ADD_POST_FAILURE:
            draft.addPostLoading = true;
            draft.addPostError = action.error;
        default:
            break;
    }
});
export default reducer;