export interface Auth {
  userId: string | null;
  setUserId: (id: string) => void;
}

export interface Data {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}
