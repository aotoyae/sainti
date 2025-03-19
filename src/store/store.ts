import { Menu } from '@/utils/types';
import { create } from 'zustand';

const useMenuStore = create<Menu>((set) => ({
  selectedMenu: 'home',
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));

export default useMenuStore;
