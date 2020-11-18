import faker from 'faker';
import produce from 'immer';
import { nanoid } from 'nanoid';

const dummyUser = {
    me: {
        id: 1,
        nickname: 'momo',
        Posts: [{ id: 1 }],
        Followings: [
            { nickname: faker.name.findName() },
            { nickname: faker.name.findName() },
            { nickname: faker.name.findName() },],
        Followers: [
            { nickname: faker.name.findName() },
            { nickname: faker.name.findName() },
            { nickname: faker.name.findName() },
        ],
    },
    userInfo: {},
};
export default dummyUser;