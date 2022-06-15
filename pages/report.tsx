import type { NextPage } from "next";
import { useState } from "react";
import { ContentLayout } from "../components/layouts/ContentLayout";
import { AddNewData } from "../components/pages/report/AddNewData";
import { EditExistingData } from "../components/pages/report/EditExistingData";

const tabsData = [
  {
    title: "Add new data",
    content: <AddNewData />,
  },
  {
    title: "Edit existing data",
    content: <EditExistingData />,
  },
];

const Report: NextPage = () => {
  const [openTab, setOpenTab] = useState(0);

  const classNameTabOpen = "text-white bg-gray-600";
  const classNameTabClose = "text-gray-600 bg-white";

  return (
    <ContentLayout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-col text-center text-white">
          <h1 className="pb-4 text-2xl font-semibold">
            You can contribute to complete the database!
          </h1>
          <h2>
            You can either fix the existing data or submit a keyboard data. Just
            choose it below. Every submitted data will help this site grow.
          </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
              role="tablist"
            >
              {tabsData.map((tab, index) => (
                <li
                  key={tab.title}
                  className="flex-auto mr-2 -mb-px text-center last:mr-0"
                >
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === index ? classNameTabOpen : classNameTabClose)
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(index);
                    }}
                    data-toggle="tab"
                    href={`#link${index}`}
                    role="tablist"
                  >
                    {tab.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white border border-gray-200 rounded shadow-lg dark:bg-gray-900 dark:border-gray-700 ">
              <div className="flex-auto px-4 py-5 ">
                <div className="tab-content tab-space">
                  {tabsData.map((tab, index) => (
                    <div
                      key={tab.title}
                      className={openTab === index ? "block" : "hidden"}
                      id={`link${index}`}
                    >
                      {tab.content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Report;
