import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useKeyboard from "../../../../store/store";
import { Keyboard } from "../../../../types";
import { SearchInput } from "../SearchInput";
import { SearchOutput } from "../SearchOutput";

interface Props {
  urlMap: string;
}

const KeyboardSearch: NextPage<Props> = (props) => {
  const keyboardsRaw = useKeyboard((state) => state.data);

  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredKeyboards, setFilteredKeyboards] = useState<Keyboard[]>([]);

  useEffect(() => {
    if (searchInput.length == 0) setFilteredKeyboards([]);
    else if (searchInput.length >= 1) {
      const newFilteredKeyboard = Object.values(keyboardsRaw).filter(
        (keyboard) =>
          keyboard.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
      );

      setFilteredKeyboards(newFilteredKeyboard);
    } else {
      setFilteredKeyboards([]);
    }
  }, [searchInput, keyboardsRaw]);

  return (
    <div className="relative flex flex-col">
      <SearchInput
        defaultValue={searchInput}
        onChangeFn={(v: string) => setSearchInput(v)}
      />
      <SearchOutput
        keyword={searchInput}
        urlMap={props.urlMap}
        filteredKeyboards={filteredKeyboards}
        onClickFn={() => setSearchInput("")}
      />
    </div>
  );
};

export default KeyboardSearch;
