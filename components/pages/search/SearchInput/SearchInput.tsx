import type { NextPage } from "next";
import { useState } from "react";

interface SearchInputProps {
  onChangeFn: (v: string) => void;
  defaultValue: string;
}

const SearchInput: NextPage<SearchInputProps> = ({
  onChangeFn,
  defaultValue,
}) => {
  const [input, setInput] = useState<string>(defaultValue);

  function onChangeInput(value: string) {
    setInput(value);
    onChangeFn(value);
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input
        onChange={(e) => onChangeInput(e.target.value)}
        value={input}
        type="search"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search keyboard..."
        required
      />
    </div>
  );
};

export default SearchInput;
