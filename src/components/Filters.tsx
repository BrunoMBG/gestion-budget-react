function Filters() {
  return (
    <section className="filtres" aria-label="Filtres des transactions">
      {/* Filtre par type */}
      <div
        className="filtres__groupe"
        role="group"
        aria-label="Filtrer par type"
      >
        {/* Bouton tous */}
        <button
          type="button"
          className="filtres__bouton filtres__bouton--actif"
          data-type="tous"
        >
          Tous
        </button>

        {/* Bouton revenus */}
        <button type="button" className="filtres__bouton" data-type="revenu">
          Revenus
        </button>

        {/* Bouton dépenses */}
        <button type="button" className="filtres__bouton" data-type="depense">
          Dépenses
        </button>
      </div>

      {/* Filtre par catégorie  */}
      <div
        className="filtres__groupe"
        role="group"
        aria-label="Filtrer par catégorie"
      >
        {/* Bouton toutes catégories */}
        <button
          type="button"
          className="filtres__bouton"
          data-categorie="toutes"
        >
          Toutes catégories
        </button>

        {/* Bouton alimentation */}
        <button
          type="button"
          className="filtres__bouton"
          data-categorie="alimentation"
        >
          Alimentation
        </button>

        {/* Bouton loyer */}
        <button
          type="button"
          className="filtres__bouton"
          data-categorie="loyer"
        >
          Loyer
        </button>

        {/* Bouton loisirs */}
        <button
          type="button"
          className="filtres__bouton"
          data-categorie="loisirs"
        >
          Loisirs
        </button>
      </div>
    </section>
  );
}

export default Filters;
