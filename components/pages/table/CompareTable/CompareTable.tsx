import type { NextPage } from "next";
import Image from "next/image";
import useKeyboard from "../../../../store/store";
import { Keyboard } from "../../../../types";
import { ToolTip } from "../../../ui/ToolTip";
import { KeyboardSearch } from "../../search/KeyboardSearch";

interface Props {
  keyboard: Keyboard[];
  comparedSlugs: string[];
}

type LooseKeyboard = {
  [key: string]: any;
};

const CompareTable: NextPage<Props> = (props) => {
  const headers = useKeyboard((state) => state.header);

  const kbMap = { ...props.keyboard[0] };
  delete kbMap.prices;
  delete kbMap.imageUrl;
  delete kbMap.slug;

  function generateUrl(index: number): string {
    let comparedSlugsCopy = [...props.comparedSlugs];

    comparedSlugsCopy[index] = "{slug}";
    comparedSlugsCopy = comparedSlugsCopy.filter((n) => n);

    return `/keyboard/compare?slugs=${JSON.stringify(comparedSlugsCopy)}`;
  }

  let i = 0;

  return (
    <table className="w-full text-sm text-left text-gray-500 table-fixed dark:text-gray-400">
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          ></th>
          <td className="px-6 py-4">
            <KeyboardSearch urlMap={generateUrl(0)} />
          </td>
          <td className="px-6 py-4">
            <KeyboardSearch urlMap={generateUrl(1)} />
          </td>
          <td className="hidden px-6 py-4 sm:block">
            <KeyboardSearch urlMap={generateUrl(2)} />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          ></th>
          {props.keyboard.map((kb) => (
            <td key={`${kb.name}${kb.imageUrl}${i++}`} className="px-6 py-4">
              {
                <Image
                  src={kb.imageUrl!}
                  alt="kbImage"
                  width={200}
                  height={200}
                />
              }
            </td>
          ))}
        </tr>
        {Object.keys(kbMap).map((kbKey, index) => (
          <tr
            key={`${kbKey}${index}${i++}`}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 break-words dark:text-white"
            >
              {headers[index]}
            </th>
            {props.keyboard.map((kb) => (
              <td
                key={`${kbKey}${index}${kb.name}${i++}`}
                className="px-6 py-4 break-words"
              >
                {(kb as LooseKeyboard)[kbKey]}
              </td>
            ))}
          </tr>
        ))}
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Prices
          </th>
          {props.keyboard.map((kb) => (
            <td key={`${kb.name}${kb.prices}${i++}`} className="px-6 py-4">
              {generatePricesElement(
                JSON.parse((kb as LooseKeyboard)["prices"])
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
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
      className="flex flex-col items-center justify-between mb-4 md:flex-row last:mb-0"
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

export default CompareTable;
