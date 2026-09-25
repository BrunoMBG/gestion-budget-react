import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

function Form() {
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
          required
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
