import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../../library/context";
import { Keyboard } from "../../../../types";
import { SearchInput } from "../SearchInput";
import { SearchOutput } from "../SearchOutput";

interface Props {
  urlMap: string;
}

const KeyboardSearch: NextPage<Props> = (props) => {
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
      <SearchOutput
        urlMap={props.urlMap}
        filteredKeyboards={filteredKeyboards}
      />
    </div>
  );
};

export default KeyboardSearch;
