import type { NextPage } from "next";
import { Footer } from "../components/layouts/Footer";
import { KeyboardSearch } from "../components/pages/search/KeyboardSearch";

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center h-screen">
        <div className="flex flex-col items-center justify-center grow">
          <h1 className="font-extrabold text-7xl sm:text-9xl dark:text-white">
            Keebods
          </h1>
          <h2 className="pt-2 pb-5 font-bold dark:text-white">
            Mechanical Keyboard Database
          </h2>
          <KeyboardSearch urlMap="/keyboard/{slug}" />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
