export interface Transaction {
  id: string;
  title: string;
  amount: number | string;
  type: "revenu" | "depense";
  category: "alimentation" | "loyer" | "loisirs" | "autre";
  date: string;
}