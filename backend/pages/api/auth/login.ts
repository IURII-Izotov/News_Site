import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;
export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  res.send("Login is not implemented yet");
}
