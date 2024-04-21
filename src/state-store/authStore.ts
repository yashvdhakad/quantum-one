import { create } from "zustand";

type AuthStore = {
  email: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loggedInUser: object;
  setLoggedInUser: (user: object) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  email: "",
  setEmail: (e) => set(() => ({ email: e.target.value })),
  password: "",
  setPassword: (e) => set(() => ({ password: e.target.value })),
  name: "",
  setName: (e) => set(() => ({ name: e.target.value })),
  loggedInUser: {},
  setLoggedInUser: (user: object) => set(() => ({ loggedInUser: user })),
}));

export default useAuthStore;