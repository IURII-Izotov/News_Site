import type { Database } from "../backend/prisma/prisma";

type APIResponse<T> = { status: "success"; data: T } | { status: "error"; error: string };
type Endpoint<Request, Response> = { request: Request; response: APIResponse<Response> };

export type PostGet = Endpoint<
  {
    query?: {
      page?: number;
      tag?: string;
      contains?: string;
    };
  },
  (Database["post"] & {
    tags: Database["tag"][];
    liked: boolean;
  })[]
>;

export type TagGetData = Database["tag"][];
