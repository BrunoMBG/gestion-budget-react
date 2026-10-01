import type { Transaction } from "../types/types";

interface SummaryProps {
  transactions: Transaction[];
}

function Summary({ transactions }: SummaryProps) {
  // Calcul du total des revenus
  const totalRevenus = transactions
    .filter((transaction) => transaction.type === "revenu")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  // Calcul du total des dépenses
  const totalDepenses = transactions
    .filter((transaction) => transaction.type === "depense")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  // Calcul du solde total
  const soldeTotal = totalRevenus - totalDepenses;

  return (
    <section className="resume" aria-label="Résumé du budget">
      <p className="resume__libelle">Solde total</p>
      <p className="resume__total">
        {soldeTotal.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €
      </p>

      <div className="resume__blocs">
        {/* Revenus */}
        <article className="resume__bloc resume__bloc--revenu">
          <p className="resume__bloc-titre">Revenus</p>
          <p className="resume__bloc-montant">
            +{" "}
            {totalRevenus.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}{" "}
            €
          </p>
        </article>
        {/* Dépenses */}
        <article className="resume__bloc resume__bloc--depense">
          <p className="resume__bloc-titre">Dépenses</p>
          <p className="resume__bloc-montant">
            -{" "}
            {totalDepenses.toLocaleString("fr-FR", {
              minimumFractionDigits: 2,
            })}{" "}
            €
          </p>
        </article>
      </div>
    </section>
  );
}

export default Summary;
