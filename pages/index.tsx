import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { SearchInput } from "../components/pages/home/SearchInput";
import { SearchOutput } from "../components/pages/home/SearchOutput";
import { getKeyboardData } from "../library/sheets";
import { Keyboard } from "../types";

interface HomeProps {
  keyboards: Keyboard[];
}

const Home: NextPage<HomeProps> = ({ keyboards }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredKeyboards, setFilteredKeyboards] = useState<Keyboard[]>([]);

  useEffect(() => {
    if (searchInput.length == 0) return;
    else if (searchInput.length >= 3) {
      const newFilteredKeyboard = keyboards.filter((keyboard) =>
        keyboard.name
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      );
      setFilteredKeyboards(newFilteredKeyboard);
    } else {
      setFilteredKeyboards([]);
    }
  }, [searchInput, keyboards]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <SearchInput
            defaultValue={searchInput}
            onChangeFn={(v: string) => setSearchInput(v)}
          />
          <SearchOutput filteredKeyboards={filteredKeyboards} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const keyboards = await getKeyboardData();

    return {
      props: {
        keyboards: keyboards.slice(1, keyboards.length), // remove sheet header
      },
      revalidate: 30, // In seconds
    };
  } catch (error) {
    console.error("Unable to get data", error);
  }
}

export default Home;
