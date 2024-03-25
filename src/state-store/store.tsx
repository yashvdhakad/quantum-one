import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  name: string;
  nameChange: () => void;
};

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  name: "Test",
  nameChange: () => set((state) => ({ name: "Yash Dhakad" })),
}));

export default useCounterStore;
