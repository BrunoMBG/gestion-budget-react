import { useState } from "react";

function Filters() {
  // Filtre par type
  const [type, setType] = useState("tous");

  // Filtre par catégorie
  const [categorie, setCategorie] = useState("toutes");

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
          className={`filtres__bouton ${
            type === "tous" ? "filtres__bouton--actif" : ""
          }`}
          onClick={() => setType("tous")}
        >
          Tous
        </button>

        {/* Bouton revenus */}
        <button
          type="button"
          className={`filtres__bouton ${
            type === "revenu" ? "filtres__bouton--actif" : ""
          }`}
          onClick={() => setType("revenu")}
        >
          Revenus
        </button>

        {/* Bouton dépenses */}
        <button
          type="button"
          className={`filtres__bouton ${
            type === "depense" ? "filtres__bouton--actif" : ""
          }`}
          onClick={() => setType("depense")}
        >
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
          className={`filtres__bouton ${
            categorie === "toutes" ? "filtres__bouton--actif" : ""
          }`}
          onClick={() => setCategorie("toutes")}
        >
          Toutes
        </button>

        {/* Bouton alimentation */}
        <button
          type="button"
          className={`filtres__bouton ${
            categorie === "alimentation" ? "filtres__bouton--actif" : ""
          }`}
          onClick={() => setCategorie("alimentation")}
        >
          Alimentation
        </button>

        {/* Bouton loyer */}
        <button
          type="button"
          className={`filtres__bouton ${
            categorie === "loyer" ? "filtres__bouton--actif" : ""
          }`}
          onClick={() => setCategorie("loyer")}
        >
          Loyer
        </button>

        {/* Bouton loisirs */}
        <button
          type="button"
          className={`filtres__bouton ${
            categorie === "loisirs" ? "filtres__bouton--actif" : ""
          }`}
          onClick={() => setCategorie("loisirs")}
        >
          Loisirs
        </button>
      </div>
    </section>
  );
}

export default Filters;
