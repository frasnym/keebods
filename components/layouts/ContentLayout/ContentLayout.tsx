import type { NextPage } from "next";
import { KeyboardSearch } from "../../pages/search/KeyboardSearch";

interface Props {
  children?: React.ReactNode;
}

const ContentLayout: NextPage<Props> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <header className="sticky top-0 z-40 flex justify-center flex-none w-full py-3 mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
        <KeyboardSearch urlMap="/keyboard/{slug}" />
      </header>
      <div className="container px-2 py-10 mx-auto md:w-6/12">
        <div className="w-full h-full p-2 bg-white border border-gray-200 code-preview rounded-xl bg-gradient-to-r dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
