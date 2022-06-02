import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ContentLayout } from "../../components/layouts/ContentLayout";
import { ToolTip } from "../../components/ui/ToolTip";
import { getKeyboardData } from "../../library/sheets";
import { Keyboard } from "../../types";

interface KeyboardDetailProps {
  keyboards: Keyboard[];
  header: Keyboard;
}

interface UpdatedKeyboard {
  [key: string]: any;
}

const KeyboardDetail: NextPage<KeyboardDetailProps> = ({
  keyboards,
  header,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  const keyboard = keyboards ? keyboards.find((kb) => kb.slug === slug) : null;
  if (!keyboard) return <p>Keyboard not found</p>;

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
              alt="mpBagde"
              width={15}
              height={15}
            />
          ) : null}
        </a>
      </ToolTip>
    </div>
  ));

  return (
    <ContentLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 table-fixed dark:text-gray-400">
          <tbody>
            {Object.entries(header).map(([key]) => (
              <tr
                key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {(header as unknown as UpdatedKeyboard)[key]}
                </th>
                <td className="px-6 py-4 break-words">
                  {(keyboard as unknown as UpdatedKeyboard)[key]}
                </td>
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

export async function getStaticPaths() {
  const keyboards = await getKeyboardData();

  const paths = keyboards.map((kb) => ({
    params: { slug: kb.slug },
  }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps() {
  try {
    const keyboards = await getKeyboardData();
    const header = keyboards[0];
    delete header.slug;
    delete header.prices;

    return {
      props: {
        keyboards: keyboards.slice(1, keyboards.length), // remove sheet header
        header,
      },
      revalidate: 30, // In seconds
    };
  } catch (error) {
    console.error("Unable to get data", error);
  }
}

export default KeyboardDetail;
