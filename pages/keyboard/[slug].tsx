import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ContentLayout } from "../../components/layouts/ContentLayout";
import { DetailTable } from "../../components/pages/table/DetailTable";
import AppContext from "../../library/context";
import { getKeyboardData } from "../../library/sheets";
import { AppContextInterface } from "../../types";

const KeyboardDetail: NextPage = () => {
  const router = useRouter();
  const value = useContext(AppContext);

  const exitComponent = <p>Keyboard not found</p>;

  if (!value) return exitComponent;

  const slug = router.query.slug as string;
  const keyboards = value?.data;

  const keyboard = keyboards[slug];
  if (!keyboard) return exitComponent;

  return (
    <ContentLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <DetailTable keyboard={keyboard} />
      </div>
    </ContentLayout>
  );
};

export async function getServerSideProps() {
  console.log("Running getServerSideProps KeyboardDetail");

  let pageProps: AppContextInterface = { header: [], data: {} };

  try {
    pageProps = await getKeyboardData();

    return { props: pageProps };
  } catch (error) {
    console.error("Unable to get data", error);
    return { props: pageProps };
  }
}

export default KeyboardDetail;
