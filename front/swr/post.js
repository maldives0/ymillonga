import faker from 'faker';
import { nanoid } from 'nanoid';

const dummyPost = {
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
        Comments: [{
            User: {
                id: nanoid(),
                nickname: faker.name.findName(),
            },
            content: faker.lorem.sentence(),
        }],
        Likers: [{ id: 2 }],
    }],
    imagePaths: [],

};
export default dummyPost;