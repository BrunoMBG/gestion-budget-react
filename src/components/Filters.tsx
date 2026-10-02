import Button from "./Button";

interface FiltersProps {
  filterType: string;
  setFilterType: (type: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
}

function Filters({
  filterType,
  setFilterType,
  filterCategory,
  setFilterCategory

}: FiltersProps) {
  
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
              filterType === opt.value ? "filtres__bouton--actif" : ""
            }`}
            onClick={() => setFilterType(opt.value)}
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
              filterCategory === opt.value ? "filtres__bouton--actif" : ""
            }`}
            onClick={() => setFilterCategory(opt.value)}
          >
            {opt.label}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Filters;
