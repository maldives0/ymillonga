import User from "./user";
export default interface Comment {
  id: string;
  content: string;
  createdAt: string;
  User: Partial<User>;
}
