export type User = {
  id?: string;
  username: string;
  email: string;
  password?: string;
  dayIds: string[] | null;
};
