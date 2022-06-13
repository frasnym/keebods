import type { NextPage } from "next";
import { KeyboardSearch } from "../components/pages/search/KeyboardSearch";

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex items-center justify-center h-screen">
        <KeyboardSearch />
      </div>
    </div>
  );
};

export default Home;
