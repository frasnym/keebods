import type { NextPage } from "next";
import { SearchKeyboard } from "../components/pages/search/SearchKeyboard";

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex items-center justify-center h-screen">
        <SearchKeyboard />
      </div>
    </div>
  );
};

export default Home;
