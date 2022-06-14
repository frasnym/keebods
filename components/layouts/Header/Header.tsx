import type { NextPage } from "next";
import Link from "next/link";
import { Emoji } from "react-component-utility";
import { KeyboardSearch } from "../../pages/search/KeyboardSearch";

const urls = [
  {
    label: "Report",
    url: "/report",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const Header: NextPage = () => {
  return (
    <header className="sticky top-0 z-40 w-full p-3 bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
      <div className="flex justify-between mx-auto xl:w-6/12">
        <KeyboardSearch urlMap="/keyboard/{slug}" />
        <ul className="flex flex-wrap items-center justify-between mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          {urls.map((url) => (
            <li key={url.url} className="mr-5">
              <Link href={url.url} shallow={true}>
                <a className="hover:underline">{url.label}</a>
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://linktr.ee/frasnym"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-gray-100 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="relative px-5 py-2 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
                <Emoji symbol="💝" /> Support
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
