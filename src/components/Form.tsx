function Form() {
  return (
    <form className="form-transaction" aria-label="Ajouter une transaction">
      <h2 className="form-transaction__titre">Nouvelle transaction</h2>

      {/*  Titre */}
      <div className="form-transaction__champ">
        <label htmlFor="titre" className="form-transaction__label">
          Titre
        </label>
        <input
          type="text"
          id="titre"
          className="form-transaction__input"
          placeholder="Ex. Courses de la semaine"
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
          className="form-transaction__input"
          placeholder="0,00"
          step="0.01"
          min="0.01"
          required
        />
      </div>

      <div className="form-transaction__bloc">
        <div className="form-transaction__champ">
          <label htmlFor="type" className="form-transaction__label">
            Type
          </label>
          <select id="type" className="form-transaction__select" required>
            <option value="revenu">Revenu</option>
            <option value="depense">Dépense</option>
          </select>
        </div>
        <div className="form-transaction__champ">
          <label htmlFor="categorie" className="form-transaction__label">
            Catégorie
          </label>
          <select id="categorie" className="form-transaction__select" required>
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
          className="form-transaction__input"
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
