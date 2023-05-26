import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  res.send("Registration is not implemented yet");
}
