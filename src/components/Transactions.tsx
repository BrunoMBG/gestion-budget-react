function Transactions() {
  return (
    <section className="transactions" aria-label="Liste des transactions">
      <div className="transactions__tri">
        <label htmlFor="triTransactions" className="transactions__label">
          Trier par
        </label>

        <select id="triTransactions" className="transactions__select">
          <option value="dateDesc">Date (plus récent)</option>
          <option value="dateAsc">Date (plus ancien)</option>
          <option value="montantDesc">Montant (décroissant)</option>
          <option value="montantAsc">Montant (croissant)</option>
          <option value="titreAsc">Titre (A → Z)</option>
        </select>
      </div>

      <ul className="transactions__liste">

      </ul>
    </section>
  );
}

export default Transactions;
