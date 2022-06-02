import type { NextPage } from "next";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: NextPage<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-no-wrap bg-white dark:bg-gray-900">
      <div className="container px-2 py-10 mx-auto md:w-6/12">
        <div className="w-full h-full p-2 bg-white border border-gray-200 code-preview rounded-xl bg-gradient-to-r dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
