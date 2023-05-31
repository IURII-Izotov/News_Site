import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";
import type { TagGet } from "../../../contract/api";
import { respondUnsupportedMethod } from "../../utils";

export default function (req: NextApiRequest, res: NextApiResponse<TagGet["response"]>) {
  switch (req.method) {
    case "GET": {
      prisma.tag
        .findMany()
        .then(data => res.json({ status: "success", data }))
        .catch(e => {
          console.error(e);
          res
            .status(500)
            .json({ error: "There was an error trying to read the data", status: "error" });
        });
      break;
    }
    default: {
      respondUnsupportedMethod(req, res);
    }
  }
}
