export interface Menu {
  selectedMenu: string;
  setSelectedMenu: (selectedMenu: string) => void;
}

export interface Data {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}
