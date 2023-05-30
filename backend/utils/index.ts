import { createHash } from "crypto";

export function generateHashString(value: string) {
  return createHash("md5").update(value).digest("base64");
}

export function generatePasswordHash(password: string, username: string) {
  return generateHashString(password + username);
}
