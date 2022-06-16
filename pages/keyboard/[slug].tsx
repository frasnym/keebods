import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ContentLayout } from "../../components/layouts/ContentLayout";
import { DetailTable } from "../../components/pages/table/DetailTable";
import useKeyboard from "../../store/store";

const KeyboardDetail: NextPage = () => {
  const slug = useRouter().query.slug as string;
  const keyboards = useKeyboard((state) => state.data);

  const keyboard = keyboards[slug];
  if (!keyboard) return <p>Keyboard not found</p>;

  return (
    <ContentLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <DetailTable keyboard={keyboard} />
      </div>
    </ContentLayout>
  );
};

export default KeyboardDetail;
