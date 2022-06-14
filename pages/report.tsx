import type { NextPage } from "next";
import { ContentLayout } from "../components/layouts/ContentLayout";

const Report: NextPage = () => {
  return (
    <ContentLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        Report page
      </div>
    </ContentLayout>
  );
};

export default Report;
