import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import type { Transaction } from "../types/types";

interface FormProps {
  onAddTransaction: (transaction: Omit<Transaction, "id">) => void;
}

function Form({ onAddTransaction }: FormProps) {
  // Récupère la date du jour
  const todayDate = new Date().toISOString().split("T")[0];
  // Définit la date minimale à 5 ans avant l'année actuelle
  const currentYear = new Date().getFullYear();
  const minDate = `${currentYear - 5}-01-01`;

  interface TransactionsForm {
    title: string;
    amount: string;
    type: "revenu" | "depense";
    category: "alimentation" | "loyer" | "loisirs" | "autre";
    date: string;
  }

  const [formData, setFormData] = useState<TransactionsForm>({
    title: "",
    amount: "",
    type: "revenu",
    category: "alimentation",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "type" && value === "revenu") {
      setFormData({
        ...formData,
        type: "revenu",
        category: "" as any,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const transactionToSend = {
      ...formData,
      category: formData.type === "revenu" ? ("" as any) : formData.category,
    };

    onAddTransaction(transactionToSend);

    setFormData({
      title: "",
      amount: "",
      type: "revenu",
      category: "alimentation",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-transaction"
      aria-label="Ajouter une transaction"
    >
      <h2 className="form-transaction__titre">Nouvelle transaction</h2>

      {/*  Titre */}
      <Input
        label="Titre"
        id="titre"
        name="title"
        type="text"
        placeholder="Ex : Courses de la semaine"
        value={formData.title}
        onChange={handleChange}
        required
      />

      {/* Montant  */}
      <Input
        label="Montant (€)"
        id="montant"
        name="amount"
        type="number"
        placeholder="0,00"
        step="0.01"
        min="0.01"
        value={formData.amount}
        onChange={handleChange}
        required
      />

      {/* Select */}
      <div className="form-transaction__bloc">
        {/* Champ type */}
        <Select
          label="Type"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          options={[
            { value: "revenu", label: "Revenu" },
            { value: "depense", label: "Dépense" },
          ]}
          required
        />

        {/* Champ Catégorie */}
        <Select
          label="Categorie"
          name="category"
          id="categorie"
          value={formData.category}
          onChange={handleChange}
          options={[
            { value: "alimentation", label: "Alimentation" },
            { value: "loyer", label: "Loyer" },
            { value: "loisirs", label: "Loisirs" },
            { value: "autre", label: "Autre" },
          ]}
          disabled={formData.type === "revenu"}
          required={formData.type !== "revenu"}
        />
      </div>

      {/* Date  */}
      <Input
        label="Date"
        id="date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        min={minDate}
        max={todayDate}
        required
      />

      {/* Bouton  */}
      <Button type="submit" className="form-transaction__bouton">
        Ajouter la transaction
      </Button>
    </form>
  );
}

export default Form;
