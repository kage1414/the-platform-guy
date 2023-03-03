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
      sendEmail(body).then((message) => {
        console.log(message);
        res.status(200).end();
      });
    }
  }
}
