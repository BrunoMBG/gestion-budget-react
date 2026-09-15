function Summary() {
  return (
      <section className="resume" aria-label="Résumé du budget">
        <p className="resume__libelle">Solde total</p>
        <p className="resume__total">
          1 363,60 €
        </p>

        <div className="resume__blocs">
          {/* Revenus */}
          <article className="resume__bloc resume__bloc--revenu">
            <p className="resume__bloc-titre">Revenus</p>
            <p className="resume__bloc-montant">
              + 2 200,00 €
            </p>
          </article>
          {/* Dépenses */}
          <article className="resume__bloc resume__bloc--depense">
            <p className="resume__bloc-titre">Dépenses</p>
            <p className="resume__bloc-montant">
              - 836,40 €
            </p>
          </article>
        </div>
      </section>
  );
}

export default Summary
