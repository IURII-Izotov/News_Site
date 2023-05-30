import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";
import type { TagGet } from "../../../contract/api";

export default function (req: NextApiRequest, res: NextApiResponse<TagGet["response"]>) {
  switch (req.method) {
    case "GET": {
      prisma.tag.findMany().then(data => res.json({ status: "success", data }));
      break;
    }
    default: {
      res
        .status(405)
        .json({ status: "error", error: `Endpoint does not accept method ${req.method}` });
    }
  }
}
