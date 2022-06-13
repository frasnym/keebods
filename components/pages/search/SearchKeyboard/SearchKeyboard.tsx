import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../../library/context";
import { Keyboard } from "../../../../types";
import { SearchInput } from "../../home/SearchInput";
import { SearchOutput } from "../../home/SearchOutput";

const SearchKeyboard: NextPage = () => {
  const ctxValue = useContext(AppContext);
  const keyboardsRaw = ctxValue!.data;

  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredKeyboards, setFilteredKeyboards] = useState<Keyboard[]>([]);

  useEffect(() => {
    if (searchInput.length == 0) setFilteredKeyboards([]);
    else if (searchInput.length >= 1) {
      const newFilteredKeyboard = Object.values(keyboardsRaw).filter(
        (keyboard) =>
          keyboard.name
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase())
      );
      setFilteredKeyboards(newFilteredKeyboard);
    } else {
      setFilteredKeyboards([]);
    }
  }, [searchInput, keyboardsRaw]);

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
