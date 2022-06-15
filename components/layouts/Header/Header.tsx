import type { NextPage } from "next";
import { KeyboardSearch } from "../../pages/search/KeyboardSearch";
import { SupportBtn } from "../../ui/buttons/SupportBtn";
import { Menu } from "../Menu";

const Header: NextPage = () => {
  return (
    <header className="sticky top-0 z-40 w-full p-3 bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
      <div className="flex justify-between mx-auto xl:w-6/12">
        <KeyboardSearch urlMap="/keyboard/{slug}" />
        <div className="flex gap-5">
          <Menu />
          <SupportBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
