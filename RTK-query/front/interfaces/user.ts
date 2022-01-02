import Post from "./post";
export default interface User {
  id: string;
  nickname: string;
  email: string;
  password: string;
  Posts: Post[];
  Followings: User[];
  Followers: User[];
  Ignorings: User[];
}
