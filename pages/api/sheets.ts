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
  console.log("/api/sheet", req.method);

  if (req.method === "POST") {
    const mkSheet = new MechanicalKeyboards();
    await mkSheet.initSheetByTitle("publicData");

    const result = await mkSheet.appendRow(req.body);
    console.log(result);

    return res.status(201).json({ message: "Success" });
  } else if (req.method === "GET") {
    const mkSheet = new MechanicalKeyboards();
    await mkSheet.initSheetByTitle("database");

    const result = await mkSheet.getRows();

    return res.status(200).json({ message: "Success", data: result });
  }
}
