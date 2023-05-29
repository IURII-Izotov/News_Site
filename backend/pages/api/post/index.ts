import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";
import type { PostGet } from "../../../../contract/api";

const postsPerPage = 20;
export default async function (req: NextApiRequest, res: NextApiResponse<PostGet["response"]>) {
  const query = req.query as PostGet["request"]["query"];
  switch (req.method) {
    case "GET": {
      await prisma.post
        .findMany({
          take: postsPerPage,
          include: { Tag: true },
          where: {
            OR: query?.contains
              ? [{ title: { contains: query?.contains } }, { text: { contains: query?.contains } }]
              : undefined,
            Tag: { some: { name: query?.tag } },
          },
          skip: Math.max(((query?.page ?? 1) - 1) * 20, 0),
        })
        .then(data => data.map(item => Object.assign(item, { liked: false, tags: item.Tag })))
        .then(data => res.json({ status: "success", data }))
        .catch(e => {
          console.error(e);
          res.json({ error: "There was an error trying to read the data", status: "error" });
        });
      break;
    }
    default: {
      res
        .status(405)
        .json({ status: "error", error: `Endpoint does not accept method ${req.method}` });
    }
  }
}
