import type { NextPage } from "next";
import Link from "next/link";
import { Keyboard } from "../../../../types";

interface Props {
  filteredKeyboards: Keyboard[];
  urlMap: string;
  onClickFn: () => void;
}

const SearchOutput: NextPage<Props> = (props) => {
  return (
    <div className="absolute w-full mt-10">
      {props.filteredKeyboards.length > 0 ? (
        <div className="z-10 w-full bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700">
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            {props.filteredKeyboards.map((kb) => (
              <li key={kb.slug}>
                <Link
                  href={props.urlMap.replace("{slug}", kb.slug!)}
                  shallow={true}
                >
                  <a
                    onClick={props.onClickFn}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {kb.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SearchOutput;
