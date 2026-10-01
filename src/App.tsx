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

  return (
    <>
      <Header />
      {/* Main */}
      <main>
        <Summary transactions={transactions}/>
        <Filters />

        <Transactions transactions={transactions} />
        <Form onAddTransaction={handleAddTransaction} />
      </main>
    </>
  );
}

export default App;
