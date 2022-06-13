import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ContentLayout } from "../../components/layouts/ContentLayout";
import { ToolTip } from "../../components/ui/ToolTip";
import AppContext from "../../library/context";
import { getKeyboardData } from "../../library/sheets";
import { AppContextInterface } from "../../types";

const KeyboardDetail: NextPage = () => {
  const router = useRouter();
  const value = useContext(AppContext);

  const exitComponent = <p>Keyboard not found</p>;

  if (!value) {
    console.log("value not found", value);
    return exitComponent;
  }

  const { slug } = router.query;
  const keyboards = value?.data;
  const header = value?.header;

  const keyboard = keyboards ? keyboards.find((kb) => kb.slug === slug) : null;
  if (!keyboard) return exitComponent;

  const keyboardPrices = JSON.parse(keyboard.prices!) as Array<any>;
  const mpBtnColor: { [key: string]: string } = {
    Tokopedia:
      "dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-white",
  };

  const pricesElement = keyboardPrices.map((p) => (
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

  const kbCopy = { ...keyboard };
  delete kbCopy.prices;
  delete kbCopy.slug;
  delete kbCopy.imageUrl;

  return (
    <ContentLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-row gap-2 ">
          <Image
            src={keyboard.imageUrl!}
            alt="kbImage"
            width={200}
            height={200}
          />
          <div className="flex flex-col justify-between p-5 font-bold bg-white dark:bg-gray-700 grow">
            <span className="text-4xl text-white">{keyboard.name}</span>
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
                  {header![index]}
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
              <td className="px-6 py-4">{pricesElement}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentLayout>
  );
};

export async function getServerSideProps() {
  console.log("Running getServerSideProps Slug");

  let pageProps: AppContextInterface = { header: [], data: [] };

  try {
    pageProps = await getKeyboardData();

    return { props: pageProps };
  } catch (error) {
    console.error("Unable to get data", error);
    return { props: pageProps };
  }
}

export default KeyboardDetail;
