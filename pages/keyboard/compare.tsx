import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ContentLayout } from "../../components/layouts/ContentLayout";
import { CompareTable } from "../../components/pages/table/CompareTable";
import useKeyboard from "../../store/store";

const CompareKeyboard: NextPage = () => {
  const keyboards = useKeyboard((state) => state.data);
  const router = useRouter();

  const slugsString = router.query.slugs;

  let slugsParsed: string[] = [];
  if (typeof slugsString === "string") {
    slugsParsed = JSON.parse(slugsString) as string[];
  }

  return (
    <ContentLayout>
      <CompareTable
        keyboard={slugsParsed.map((s) => keyboards[s])}
        comparedSlugs={slugsParsed}
      />
    </ContentLayout>
  );
};

export default CompareKeyboard;
