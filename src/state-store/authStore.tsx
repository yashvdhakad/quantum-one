import { create } from "zustand";

type AuthStore = {
  email: string;
  emailHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  email: "",
  emailHandler: (e) => set((state) => ({ email: e.target.value })),
}));

export default useAuthStore;
