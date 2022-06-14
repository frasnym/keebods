import type { NextPage } from "next";
import { Emoji } from "react-component-utility";

const Footer: NextPage = () => {
  return (
    <footer className="p-4 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Made with <Emoji symbol="❤" />
        <span>
          {" "}
          by{" "}
          <a
            className="font-bold underline"
            href="https://twitter.com/intent/follow?screen_name=frasnym"
            target="_blank"
            rel="noreferrer"
          >
            FrasNym
          </a>
        </span>
      </span>
    </footer>
  );
};

export default Footer;
