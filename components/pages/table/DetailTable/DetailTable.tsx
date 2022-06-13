import type { NextPage } from "next";
import Image from "next/image";
import { useContext } from "react";
import AppContext from "../../../../library/context";
import { Keyboard } from "../../../../types";
import { ToolTip } from "../../../ui/ToolTip";

interface Props {
  keyboard: Keyboard;
}

const DetailTable: NextPage<Props> = (props) => {
  const ctxValue = useContext(AppContext);
  if (!ctxValue) return null;

  const keyboardPrices = JSON.parse(props.keyboard.prices!) as Array<any>;

  const kbCopy = { ...props.keyboard };
  delete kbCopy.prices;
  delete kbCopy.imageUrl;

  return (
    <>
      <div className="flex flex-row gap-2 ">
        <Image
          src={props.keyboard.imageUrl!}
          alt="kbImage"
          width={200}
          height={200}
        />
        <div className="flex flex-col justify-between p-5 font-bold bg-white dark:bg-gray-700 grow">
          <span className="text-4xl text-white">{props.keyboard.name}</span>
          <span className="text-5xl text-gray-300">
            {keyboardPrices[0]["price"]}
          </span>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 table-fixed dark:text-gray-400">
        <tbody>
          {Object.values(kbCopy).map((kb, index) => (
            <tr
              key={`${kb}${index}`}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {ctxValue.header[index]}
              </th>
              <td className="px-6 py-4 break-words">{kb}</td>
            </tr>
          ))}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Prices
            </th>
            <td className="px-6 py-4">
              {generatePricesElement(keyboardPrices)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

function generatePricesElement(keyboardPrices: Array<any>): JSX.Element[] {
  const mpBtnColor: { [key: string]: string } = {
    Tokopedia:
      "dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-white",
  };

  return keyboardPrices.map((p) => (
    <div
      key={p["url"]}
      className="flex flex-row items-center justify-between mb-4 last:mb-0"
    >
      <span>{p["price"]}</span>
      <ToolTip message={`Updated: ${p["created_at"]}`}>
        <a
          className={`px-3 py-2 text-xs font-medium text-center flex items-center gap-1 rounded-lg focus:ring-4 focus:outline-none ${
            mpBtnColor[p["marketplace"]]
          }`}
          href={p["url"]}
          target="_blank"
          rel="noreferrer"
        >
          {p["marketplace"]}
          {p["is_official"] ? (
            <Image
              src="https://images.tokopedia.net/img/official_store/badge_os.png"
              alt="mpBadge"
              width={15}
              height={15}
            />
          ) : null}
        </a>
      </ToolTip>
    </div>
  ));
}

export default DetailTable;
