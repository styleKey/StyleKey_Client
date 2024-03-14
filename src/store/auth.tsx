import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  auth: boolean;
  login: () => void;
};

export const useStore = create(
  persist<Store>(
    (set) => ({
      auth: false,
      login: () => set({ auth: true }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
