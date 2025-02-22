// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendEmail } from "@/utils/mailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req;
  switch (method) {
    case "POST": {
      sendEmail(body)
        .then(() => {
          res.status(200).end();
        })
        .catch((err) => {
          res.status(500).json(err);
        });
      break;
    }
    default: {
      res.status(405).end();
      break;
    }
  }
}
