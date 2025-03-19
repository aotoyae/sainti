import { Auth } from '@/utils/types';
import { create } from 'zustand';

const useAuthStore = create<Auth>((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),
}));

export default useAuthStore;
