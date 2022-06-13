import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../../library/context";
import { Keyboard } from "../../../../types";
import { SearchInput } from "../../home/SearchInput";
import { SearchOutput } from "../../home/SearchOutput";

const SearchKeyboard: NextPage = () => {
  const value = useContext(AppContext);
  const keyboards = value?.data;

  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredKeyboards, setFilteredKeyboards] = useState<Keyboard[]>([]);

  useEffect(() => {
    if (searchInput.length == 0) return;
    else if (searchInput.length >= 3) {
      const newFilteredKeyboard = keyboards!.filter((keyboard) =>
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
    <div className="flex flex-col">
      <SearchInput
        defaultValue={searchInput}
        onChangeFn={(v: string) => setSearchInput(v)}
      />
      <SearchOutput filteredKeyboards={filteredKeyboards} />
    </div>
  );
};

export default SearchKeyboard;
