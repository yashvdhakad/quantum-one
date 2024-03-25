import { create } from "zustand";

type AuthStore = {
  email: string;
  userEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  email: "",
  userEmail: (e) =>
    set((state) => ({ email: e.target.value })),
}));

export default useAuthStore;
