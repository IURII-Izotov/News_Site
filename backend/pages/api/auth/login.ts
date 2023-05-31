import type { NextApiRequest, NextApiResponse } from "next";
import { AuthLoginPost } from "../../../../contract/api";
import { generatePasswordHash, respondUnsupportedMethod } from "../../../utils";
import prisma from "../../../prisma/prisma";
import { getCookie, setCookie, getCookies } from "cookies-next";
import jwt from "jsonwebtoken";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<AuthLoginPost["response"]>
) {
  const body = req.body as AuthLoginPost["request"]["body"];
  switch (req.method) {
    case "POST":
      await prisma.account
        .findFirstOrThrow({
          where: {
            password: generatePasswordHash(body.password, body.username),
            username: body.username,
          },
        })
        .then(() => {
          if (!process.env.JWT_KEY)
            throw new Error("JWT private key is not set for this environment");

          setCookie(
            "jwt",
            jwt.sign({ username: body.username }, process.env.JWT_KEY, { expiresIn: "3h" }),
            {
              maxAge: 60 * 60 * 3,
              httpOnly: true,
              secure: true,
              req,
              res,
            }
          );
          res.json({ status: "success", data: "Login successful" });
        })
        .catch(e => {
          console.error(e);
          res.status(406).json({
            status: "error",
            error: "Login unsuccessful",
          });
        });
      break;
    default:
      respondUnsupportedMethod(req, res);
  }
}
