// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MechanicalKeyboards } from "../../library/sheets";

type Data = {
  message: string;
  data?: any;
  errors?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const mkSheet = new MechanicalKeyboards();
    await mkSheet.initSheetByTitle("publicData");

    const result = await mkSheet.appendRow(req.body);
    console.log(result);

    return res.status(201).json({ message: "Success" });
  }
  res.status(200).json({ message: "John Doe" });
}
