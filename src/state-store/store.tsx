import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// interface BearState {
//   bears: number;
//   increase: (by: number) => void;
// }

// const useBearStore = create<BearState>()((set) => ({
//   bears: 0,
//   increase: (by) => set((state) => ({ bears: state.bears + by })),
// }));

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;