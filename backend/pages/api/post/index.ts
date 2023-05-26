import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";
import type { Result, PostGetData } from "../../../../contract/api";

export default function (req: NextApiRequest, res: NextApiResponse<Result<PostGetData>>) {
  switch (req.method) {
    case "GET": {
      prisma.post
        .findMany({ take: 20, include: { Tag: true } })
        .then(data => data.map(item => ({ ...item, liked: false, tags: item.Tag })))
        .then(data => res.json({ status: "succes", data }));
      break;
    }
    default: {
      res
        .status(405)
        .json({ status: "error", error: `Endpoint does not accept method ${req.method}` });
    }
  }
}
