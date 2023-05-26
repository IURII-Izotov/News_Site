import prisma from "../prisma";
import type { Post as Post_, User as User_, Tag } from "prisma/prisma-client";
import { faker } from "@faker-js/faker";
type User = Omit<User_, "id">;
type Post = Omit<Post_, "id" | "createdAt">;

function randomInteger(min: number, max: number) {
  return min + Math.floor(Math.random() * max);
}
function getArray(count: number) {
  return Array(count).fill(0);
}
function randomArrayMember<T>(arr: T[]) {
  return arr[randomInteger(0, arr.length)];
}
function getRandomSubarray<T>(arr: T[], size = randomInteger(0, arr.length)) {
  const shuffled = arr.slice(0);
  const min = arr.length - Math.min(size, arr.length);
  let temp;
  let index;
  for (let i = arr.length - 1; i >= min; i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

export async function createMockUsers(count: number) {
  const data = getArray(count).map<User>(() => ({}));

  await prisma.user.createMany({ data });
}

export async function createMockTags(count: number) {
  const data = faker.helpers
    .uniqueArray(
      getArray(count * 10).map(() => faker.lorem.word()),
      count
    )
    .map<Tag>(string => ({ name: string }));

  await prisma.tag.createMany({ data });
}

export async function createMockPosts(count: number) {
  const users = await prisma.user.findMany();
  const images = Array<string>();
  for (let i = 0; i < count / 20; i++) {
    await new Promise(r => setTimeout(r, 100));
    images.push(
      await fetch(faker.image.url())
        .then(data => data.arrayBuffer())
        .then(arrBuffer => Buffer.from(arrBuffer).toString("base64"))
    );
  }

  const data = await Promise.all(
    getArray(count).map<Promise<Post>>(async () => {
      return {
        userId: randomArrayMember(users).id,
        text: faker.lorem.paragraph({ min: 3, max: 10 }),
        title: faker.lorem.sentence({ min: 5, max: 15 }),
        coverImage: Math.random() > 0.5 ? randomArrayMember(images) : null,
      };
    })
  );
  await prisma.post.createMany({ data }).then(data => {
    console.log(data.count);
  });
}

export async function tagPosts(tagsPerPost: number) {
  const tags = await prisma.tag.findMany();
  const posts = await prisma.post.findMany();
  for (const { id } of posts) {
    await prisma.post.update({
      data: { Tag: { connect: getRandomSubarray(tags, randomInteger(0, tagsPerPost)) } },
      where: { id },
    });
  }
}

export async function createLikes(likesPerPost: number) {
  const posts = await prisma.post.findMany();
  const users = await prisma.user.findMany();
  for (const post of posts) {
    await prisma.like.createMany({
      data: getRandomSubarray(users, randomInteger(0, likesPerPost)).map(user => ({
        userId: user.id,
        postId: post.id,
      })),
    });
  }
}

export async function createComments(commentsPerPost: number) {
  const posts = await prisma.post.findMany();
  const users = await prisma.user.findMany();
  for (const post of posts) {
    await prisma.comment.createMany({
      data: getRandomSubarray(users, randomInteger(0, commentsPerPost)).map(user => ({
        postId: post.id,
        userId: user.id,
        text: faker.lorem.sentence({ min: 2, max: 20 }),
      })),
    });
  }
}

export async function createCommentReplies(repliesPerComment: number) {
  const comments_ = await prisma.comment.findMany();
  const comments = getRandomSubarray(comments_, Math.floor(comments_.length / 3));
  const users = await prisma.user.findMany();
  for (const comment of comments) {
    await prisma.commentReply.createMany({
      data: getRandomSubarray(users, randomInteger(0, repliesPerComment)).map(user => ({
        commentId: comment.id,
        userId: user.id,
        text: faker.lorem.sentence({ min: 2, max: 20 }),
      })),
    });
  }
}
