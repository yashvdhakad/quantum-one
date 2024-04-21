import { create } from "zustand";

type DataStore = {
  data: { [key: string]: string }[];
  setData: (data: { [key: string]: string }[]) => void;
  headers: string[];
  setHeaders: (headers: string[]) => void;
};

const useDataStore = create<DataStore>((set) => ({
  data: [],
  setData: (data) => set(() => ({ data })),
  headers: [],
  setHeaders: (headers) => set(() => ({ headers })),
}));

export default useDataStore;
