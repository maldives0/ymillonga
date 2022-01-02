import User from "./user";
import Comment from "./comment";
export default interface Post {
  id: number;
  content: string;
  User: Partial<User>[] & { id: number };
  Images: Array<{ src: string }>;
  RetweetId?: number;
  Comments: Comment[];
  Retweet?: Post;
  Likers: Partial<User>[];
  createdAt: string;
}
