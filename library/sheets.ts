import { google } from "googleapis";
import slugify from "react-slugify";
import { Keyboard } from "../types/index";

export async function getKeyboardData(): Promise<Keyboard[]> {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "database", // sheet name
    });

    const rows = response.data.values;
    if (rows) {
      return rows.map((row) => {
        return {
          name: row[0],
          keys: row[1],
          material: row[2],
          knob: row[3],
          wirelessConnection: row[4],
          bluetoothConnection: row[5],
          wiredConnection: row[6],
          hotSwapAble: row[7],
          switch: row[8],
          keyCaps: row[9],
          antiGhosting: row[10],
          rgb: row[11],
          battery: row[12],
          keyCapsPuller: row[13],
          switchPuller: row[14],
          software: row[15],
          stabilizer: row[16],
          warranty: row[17],
          prices: row[18],
          slug: slugify(row[0]),
        };
      });
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}
