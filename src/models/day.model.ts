export interface Day {
  id?: string;
  title: string;
  type: "private" | "public";
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  entryIds: string[] | null;
}