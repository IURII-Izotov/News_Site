import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  res.send("Logout is not implemented yet");
}
