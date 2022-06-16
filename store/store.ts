import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { KeyboardSheetData, KeyboardLooseObjects } from "../types";

interface KeyboardStore {
  header: string[];
  data: KeyboardLooseObjects;
  initData: (data: KeyboardSheetData) => void;
}

type MyPersist = (
  config: StateCreator<KeyboardStore>,
  options: PersistOptions<KeyboardStore>
) => StateCreator<KeyboardStore>;

const useKeyboard = create<KeyboardStore>(
  (persist as unknown as MyPersist)(
    (set) => ({
      header: [],
      data: {},
      initData: (data: KeyboardSheetData) => {
        set((state) => ({
          header: [...data["header"]],
          data: { ...data["data"] },
        }));
      },
    }),
    { name: "keyboard-store" }
  )
);

export default useKeyboard;
