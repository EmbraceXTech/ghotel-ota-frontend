import { create } from "zustand";

type Store = {
  usePBM: boolean;
  count: number;
  inc: () => void;
  setUsePBM: (usePBM: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  usePBM: true,
  count: 1,
  setUsePBM: (usePBM) => set({ usePBM }),
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
