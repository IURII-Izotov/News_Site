import type { NextApiRequest, NextApiResponse } from "next";
import { AuthLoginPost } from "../../../../contract/api";
import { generatePasswordHash, respondUnsupportedMethod } from "../../../utils";
import prisma from "../../../prisma/prisma";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<AuthLoginPost["response"]>
) {
  const body = req.body as AuthLoginPost["request"]["body"];
  switch (req.method) {
    case "POST":
      await prisma.account
        .findFirst({
          where: {
            password: generatePasswordHash(body.password, body.username),
            username: body.username,
          },
        })
        // todo - send a JWT token to the user
        .then(() => res.json({ status: "success", data: "Login successful" }))
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
