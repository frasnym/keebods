import type { NextPage } from "next";
import { Emoji } from "react-component-utility";

const SupportBtn: NextPage = () => {
  return (
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
  );
};

export default SupportBtn;
