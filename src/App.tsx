import Filters from "./components/Filters";
import Form from "./components/Form";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Transactions from "./components/Transactions";
import type { Transaction } from "./types/types";
import { useState } from "react";

function App() {
  // Stocker les transactions
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Fonction pour ajouter la transaction reçue du formulaire
  const handleAddTransaction = (formData: Omit<Transaction, "id">) => {
    const newTransaction: Transaction = {
      ...formData,
      id: crypto.randomUUID(),
      amount: Number(formData.amount),
    };

    setTransactions([newTransaction, ...transactions]);
  };

  const handleDeleteTransaction = (id: string | number) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id),
    );
  };

  // États pour les filtres
  const [filterType, setFilterType] = useState("tous");
  const [filterCategory, setFilterCategory] = useState("toutes");

  // Filtrage des transactions
  const filteredTransactions = transactions.filter((transaction) => {
    const filterTypes =
      filterType === "tous" || transaction.type === filterType;
    const filterCategoryType =
      filterCategory === "toutes" || transaction.category === filterCategory;

    return filterTypes && filterCategoryType;
  });

  return (
    <>
      <Header />
      {/* Main */}
      <main>
        <Summary transactions={transactions} />
        <Filters
          filterType={filterType}
          setFilterType={setFilterType}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />

        <Transactions
          transactions={filteredTransactions}
          onDeleteTransaction={handleDeleteTransaction}
        />
        <Form onAddTransaction={handleAddTransaction} />
      </main>
    </>
  );
}

export default App;
