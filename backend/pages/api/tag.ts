import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";
import type { Result, TagGetData } from "../../../contract/api";

export default function (req: NextApiRequest, res: NextApiResponse<Result<TagGetData>>) {
  switch (req.method) {
    case "GET": {
      prisma.tag.findMany().then(data => res.json({ status: "succes", data }));
      break;
    }
    default: {
      res
        .status(405)
        .json({ status: "error", error: `Endpoint does not accept method ${req.method}` });
    }
  }
}
