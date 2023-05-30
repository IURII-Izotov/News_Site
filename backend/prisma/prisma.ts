import { PrismaClient } from "@prisma/client";
import type { Comment, CommentReply, Like, Post, Tag, User, Account } from "@prisma/client";

const prisma = new PrismaClient();
export default prisma;

export type Database = {
  account: Account;
  comment: Comment;
  commentReply: CommentReply;
  like: Like;
  post: Post;
  tag: Tag;
  user: User;
};
