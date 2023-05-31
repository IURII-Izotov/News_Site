import type { Database } from "../backend/prisma/prisma";

export type APIResponse<T> = { status: "success"; data: T } | { status: "error"; error: string };
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

export type TagGet = Endpoint<undefined, Database["tag"][]>;

export type AuthRegistrationPost = Endpoint<
  { body: Database["account"] & Database["user"] },
  "Registration successful"
>;

export type AuthLoginPost = Endpoint<{ body: Database["account"] }, "Login successful">;
