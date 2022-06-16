import create from "zustand";
import { KeyboardSheetData, KeyboardLooseObjects } from "../types";

interface KeyboardStore {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  header: string[];
  data: KeyboardLooseObjects;
  initData: (data: KeyboardSheetData) => void;
}

const useKeyboard = create<KeyboardStore>((set) => ({
  isLoading: false,
  setIsLoading: (loading: boolean) => {
    set((state) => ({
      ...state,
      isLoading: loading,
    }));
  },
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
