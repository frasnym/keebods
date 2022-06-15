import type { NextPage } from "next";
import Link from "next/link";

const urls = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Report",
    url: "/report",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const Menu: NextPage = () => {
  return (
    <ul className="flex flex-wrap items-center justify-between mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      {urls.map((url) => (
        <li key={url.url} className="mr-5 last:mr-0">
          <Link href={url.url} shallow={true}>
            <a className="hover:underline">{url.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
