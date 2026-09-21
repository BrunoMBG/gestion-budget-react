import { useState } from "react";

function Filters() {
  // Filtre par type
  const [btnTous, setbtnTous] = useState("Tous");
  const [btnRevenus, setbtnRevenus] = useState("Revenus");
  const [btnDepenses, setbtnDepenses] = useState("Depenses");

  // Filtre par catégorie
  const [btnCategories, setbtnCategories] = useState("Toutes catégories");
  const [btnAlimentation, setbtnAlimentation] = useState("Alimentation");
  const [btnLoyer, setbtnLoyer] = useState("Loyer");
  const [btnLoisirs, setbtnLoisirs] = useState("Loisirs");

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
          {btnTous}
        </button>

        {/* Bouton revenus */}
        <button type="button" className="filtres__bouton" data-type="revenu">
          {btnRevenus}
        </button>

        {/* Bouton dépenses */}
        <button type="button" className="filtres__bouton" data-type="depense">
          {btnDepenses}
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
          {btnCategories}
        </button>

        {/* Bouton alimentation */}
        <button
          type="button"
          className="filtres__bouton"
          data-categorie="alimentation"
        >
          {btnAlimentation}
        </button>

        {/* Bouton loyer */}
        <button
          type="button"
          className="filtres__bouton"
          data-categorie="loyer"
        >
          {btnLoyer}
        </button>

        {/* Bouton loisirs */}
        <button
          type="button"
          className="filtres__bouton"
          data-categorie="loisirs"
        >
          {btnLoisirs}
        </button>
      </div>
    </section>
  );
}

export default Filters;
