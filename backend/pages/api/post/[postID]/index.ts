import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET": {
      GET(req, res);
      break;
    }
    case "DELETE": {
      DELETE(req, res);
      break;
    }
    default: {
      res.status(405).send(`Endpoint does not accept method ${req.method}`);
    }
  }
}

async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.send(`You send GET - ${req.query.id}`);
}

function DELETE(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.send(`You send DELETE - ${req.query.id}`);
}
