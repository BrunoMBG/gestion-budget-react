import type { Transaction } from "../types/types";

interface TransactionsProps {
  transactions: Transaction[];
}

function Transactions({ transactions }: TransactionsProps) {
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
        {transactions.length === 0 ? (
          <p className="transactions__vide">
            Aucune transaction pour le moment.
          </p>
        ) : (
          transactions.map((transaction) => {
            const isRevenu = transaction.type === "revenu";

            return (
              <li
                key={transaction.id}
                className={`transaction ${
                  isRevenu ? "transaction--revenu" : "transaction--depense"
                }`}
                data-id={transaction.id}
              >
                <div className="transaction__infos">
                  <h3 className="transaction__titre">{transaction.title}</h3>
                  <div className="transaction__details">
                    <span className="transaction__badge">
                      {transaction.category}
                    </span>
                    <time
                      dateTime={transaction.date}
                      className="transaction__date"
                    >
                      {transaction.date}
                    </time>
                  </div>
                </div>

                <div className="transaction__action">
                  <span
                    className={`transaction__montant ${
                      isRevenu
                        ? "transaction__montant--revenu"
                        : "transaction__montant--depense"
                    }`}
                  >
                    {isRevenu ? "+ " : "- "}
                    {transaction.amount.toLocaleString("fr-FR", {
                      minimumFractionDigits: 2,
                    })}{" "}
                    €
                  </span>
                  <button
                    type="button"
                    className="transaction__bouton-supprimer"
                    aria-label={`Supprimer la transaction ${transaction.title}`}
                  >
                    ✕
                  </button>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
}

export default Transactions;
