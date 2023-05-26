import type { Database } from "../backend/prisma/prisma";

export type Result<T> =
  | {
      status: "succes";
      data: T;
    }
  | { status: "error"; error: string };

export type PostGetParams = {
  page?: number;
  tag?: string;
  contains?: string;
};
export type PostGetData = (Database["post"] & {
  tags: Database["tag"][];
  liked: boolean;
})[];

export type TagGetData = Database["tag"][];
