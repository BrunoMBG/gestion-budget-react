import { useState } from "react";
import Button from "./Button";

function Filters() {
  // Filtre par type
  const [type, setType] = useState("tous");

  // Filtre par catégorie
  const [categorie, setCategorie] = useState("toutes");

  const typeOptions = [
    { value: "tous", label: "Tous" },
    { value: "revenu", label: "Revenus" },
    { value: "depense", label: "Dépenses" },
  ];

  const categoryOptions = [
    { value: "toutes", label: "Toutes" },
    { value: "alimentation", label: "Alimentation" },
    { value: "loyer", label: "Loyer" },
    { value: "loisirs", label: "Loisirs" },
  ];

  return (
    <section className="filtres" aria-label="Filtres des transactions">
      {/* Filtre par type */}
      <div
        className="filtres__groupe"
        role="group"
        aria-label="Filtrer par type"
      >
        {typeOptions.map((opt) => (
          <Button
            key={opt.value}
            type="button"
            className={`filtres__bouton ${
              type === opt.value ? "filtres__bouton--actif" : ""
            }`}
            onClick={() => setType(opt.value)}
          >
            {opt.label}
          </Button>
        ))}
      </div>

      {/* Filtre par catégorie  */}
      <div
        className="filtres__groupe"
        role="group"
        aria-label="Filtrer par catégorie"
      >
        {categoryOptions.map((opt) => (
          <Button
            key={opt.value}
            type="button"
            className={`filtres__bouton ${
              categorie === opt.value ? "filtres__bouton--actif" : ""
            }`}
            onClick={() => setCategorie(opt.value)}
          >
            {opt.label}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Filters;
