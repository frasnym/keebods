import create from "zustand";
import { KeyboardSheetData, KeyboardLooseObjects } from "../types";

interface KeyboardStore {
  header: string[];
  data: KeyboardLooseObjects;
  initData: (data: KeyboardSheetData) => void;
}

const useKeyboard = create<KeyboardStore>((set) => ({
  header: [],
  data: {},
  initData: (data: KeyboardSheetData) => {
    set((state) => ({
      header: [...data["header"]],
      data: { ...data["data"] },
    }));
  },
}));

export default useKeyboard;
