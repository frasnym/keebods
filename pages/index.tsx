import type { NextPage } from "next";
import { Footer } from "../components/layouts/Footer";
import { Menu } from "../components/layouts/Menu";
import { Meta } from "../components/layouts/Meta";
import { KeyboardSearch } from "../components/pages/search/KeyboardSearch";
import { Loading } from "../components/ui/Loading";
import useKeyboard from "../store/store";

const Home: NextPage = () => {
  const isLoading = useKeyboard((state) => state.isLoading);
  if (isLoading) return <Loading />;

  return (
    <>
      <Meta />
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
            <br className="py-5" />
            <Menu />
          </div>
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
