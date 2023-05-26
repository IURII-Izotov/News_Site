import prisma from "../prisma";
import {
  createCommentReplies,
  createComments,
  createLikes,
  createMockPosts,
  tagPosts,
} from "./helpers";

await prisma.post.deleteMany();
await createMockPosts(1000);
await tagPosts(5);
await createLikes(50);
await createComments(50);
await createCommentReplies(3);

// clear tags
