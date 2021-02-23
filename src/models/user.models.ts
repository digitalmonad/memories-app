export interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
  dayIds: string[] | null;
}
