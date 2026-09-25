export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: "revenu" | "depense";
  category: "alimentation" | "loyer" | "loisirs" | "autre";
  date: string;
}