import prisma from "../prisma";
import { faker } from "@faker-js/faker";
import { generatePasswordHash } from "../../utils";

function randomInteger(min: number, max: number) {
  return min + Math.floor(Math.random() * max);
}
function getArray(count: number) {
  return Array<unknown>(count).fill(0);
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
function imageURLtoBase64(url: string) {
  return fetch(url)
    .then(data => data.arrayBuffer())
    .then(arrBuffer => Buffer.from(arrBuffer).toString("base64"));
}

export async function createMockAccountsAndUsers(count: number) {
  await prisma.account.createMany({
    data: getArray(count).map(() => {
      const username = faker.internet.userName();
      const password = generatePasswordHash(faker.internet.password(), username);
      return { password, username };
    }),
  });

  const accounts = await prisma.account.findMany();
  for (const account of accounts) {
    await prisma.user.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        avatar: Math.random() < 0.9 ? await imageURLtoBase64(faker.internet.avatar()) : undefined,
        Account: { connect: { username: account.username } },
      },
    });
  }
}

export async function createMockTags(count: number) {
  await prisma.tag.createMany({
    data: faker.helpers
      .uniqueArray(
        getArray(count * 10).map(() => faker.lorem.word()),
        count
      )
      .map(string => ({ name: string })),
  });
}

type CreateMockPostsArgs = {
  postsPerUser: number;
  tagsPerPost: number;
  likesPerPost: number;
  commentsPerPost: number;
};
export async function createMockPosts({
  postsPerUser,
  tagsPerPost,
  likesPerPost,
  commentsPerPost,
}: CreateMockPostsArgs) {
  const users = await prisma.user.findMany();
  const tags = await prisma.tag.findMany();
  const selectedUsers = getRandomSubarray(users, Math.floor(users.length * 0.7));
  for (const user of selectedUsers) {
    for (let i = 0; i < randomInteger(1, postsPerUser); i++) {
      await prisma.post.create({
        data: {
          text: faker.lorem.paragraph({ min: 3, max: 10 }),
          title: faker.lorem.sentence({ min: 5, max: 15 }),
          coverImage: Math.random() < 0.7 ? await imageURLtoBase64(faker.image.url()) : undefined,
          User: { connect: { username: user.username } },
          Tag: { connect: getRandomSubarray(tags, randomInteger(0, tagsPerPost)) },
          Like: {
            createMany: {
              data: getArray(randomInteger(0, likesPerPost)).map(() => ({
                username: randomArrayMember(users).username,
              })),
            },
          },
          Comment: {
            createMany: {
              data: getArray(randomInteger(0, commentsPerPost)).map(() => ({
                text: faker.lorem.sentence({ min: 2, max: 20 }),
                username: randomArrayMember(users).username,
              })),
            },
          },
        },
      });
    }
  }
}

export async function createCommentReplies(repliesPerComment: number) {
  const comments = await prisma.comment.findMany();
  const selectedComments = getRandomSubarray(comments, Math.floor(comments.length * 0.1));
  const users = await prisma.user.findMany();
  for (const comment of selectedComments) {
    await prisma.commentReply.createMany({
      data: getRandomSubarray(users, randomInteger(0, repliesPerComment)).map(user => ({
        username: user.username,
        commentId: comment.id,
        text: faker.lorem.sentence({ min: 2, max: 20 }),
      })),
    });
  }
}
