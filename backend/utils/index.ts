import { createHash } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import { APIResponse } from "../../contract/api";

export function generateHashString(value: string) {
  return createHash("md5").update(value).digest("base64");
}

export function generatePasswordHash(password: string, username: string) {
  return generateHashString(password + username);
}

export function respondUnsupportedMethod<T>(
  req: NextApiRequest,
  res: NextApiResponse<Extract<APIResponse<T>, { error: string }>>
) {
  return res
    .status(405)
    .json({ status: "error", error: `Endpoint does not accept method ${req.method}` });
}
