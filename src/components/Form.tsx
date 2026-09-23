import { useState } from "react";

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
      <div className="form-transaction__champ">
        <label htmlFor="titre" className="form-transaction__label">
          Titre
        </label>
        <input
          type="text"
          id="titre"
          name="title"
          className="form-transaction__input"
          placeholder="Ex. Courses de la semaine"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      {/* Montant  */}
      <div className="form-transaction__champ">
        <label htmlFor="montant" className="form-transaction__label">
          {" "}
          Montant (€)
        </label>
        <input
          type="number"
          id="montant"
          name = "amount"
          className="form-transaction__input"
          placeholder="0,00"
          step="0.01"
          min="0.01"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-transaction__bloc">
        <div className="form-transaction__champ">
          <label htmlFor="type" className="form-transaction__label">
            Type
          </label>
          <select id="type" name="type" value={formData.type} onChange={handleChange} className="form-transaction__select" required>
            <option value="revenu">Revenu</option>
            <option value="depense">Dépense</option>
          </select>
        </div>
        <div className="form-transaction__champ">
          <label htmlFor="categorie" className="form-transaction__label">
            Catégorie
          </label>
          <select id="categorie" name="category" value={formData.category} onChange={handleChange} className="form-transaction__select" required>
            <option value="alimentation">Alimentation</option>
            <option value="loyer">Loyer</option>
            <option value="loisirs">Loisirs</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Date  */}
      <div className="form-transaction__champ">
        <label htmlFor="date" className="form-transaction__label">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-transaction__input"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      {/* Bouton  */}
      <button type="submit" className="form-transaction__bouton">
        Ajouter la transaction
      </button>
    </form>
  );
}

export default Form;
