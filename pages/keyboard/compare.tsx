import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ContentLayout } from "../../components/layouts/ContentLayout";
import { CompareTable } from "../../components/pages/table/CompareTable";
import AppContext from "../../library/context";
import { getKeyboardData } from "../../library/sheets";
import { AppContextInterface } from "../../types";

const CompareKeyboard: NextPage = () => {
  const router = useRouter();
  const ctxValue = useContext(AppContext);
  if (!ctxValue) return null;

  console.log(ctxValue);

  const slugs = JSON.parse(router.query.slugs as string) as string[];

  return (
    <ContentLayout>
      <CompareTable
        keyboard={slugs.map((s) => ctxValue.data[s])}
        comparedSlugs={slugs}
      />
    </ContentLayout>
  );
};

export async function getServerSideProps() {
  console.log("Running getServerSideProps CompareKeyboard");

  let pageProps: AppContextInterface = { header: [], data: {} };

  try {
    pageProps = await getKeyboardData();

    return { props: pageProps };
  } catch (error) {
    console.error("Unable to get data", error);
    return { props: pageProps };
  }
}

export default CompareKeyboard;
