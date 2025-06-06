import { create } from "zustand";

type LastPassStore = {
  lastPass: string;
  setLastPass: (value: string) => void;
  resetLastPass: () => void;
};

export const useLastPassStore = create<LastPassStore>((set) => ({
  lastPass: "",
  setLastPass: (value: string) => set({ lastPass: value }),
  resetLastPass: () => set({ lastPass: "" }),
}));
