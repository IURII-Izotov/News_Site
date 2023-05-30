import type { NextApiRequest, NextApiResponse } from "next";
import { AuthRegistrationPost } from "../../../../contract/api";
import { generatePasswordHash, respondUnsupportedMethod } from "../../../utils";
import prisma from "../../../prisma/prisma";
import { Prisma } from "@prisma/client";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<AuthRegistrationPost["response"]>
) {
  console.log(res.hasHeader("Access-Control-Allow-Origin"));
  console.log(res.hasHeader("access-control-allow-origin"));
  const body = req.body as AuthRegistrationPost["request"]["body"];
  switch (req.method) {
    case "POST":
      await prisma.account
        .create({
          data: {
            password: generatePasswordHash(body.password, body.username),
            username: body.username,
            User: {
              create: {
                firstName: body.firstName,
                lastName: body.lastName,
              },
            },
          },
        })
        .then(() => res.json({ status: "success", data: "Registration successful" }))
        .catch(e => {
          res.json({
            status: "error",
            error:
              e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002"
                ? "Another user with such username exists"
                : "There was an error during registration.",
          });
        });
      break;
    default:
      respondUnsupportedMethod(req, res);
  }
}
