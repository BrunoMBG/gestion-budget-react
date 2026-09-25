interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  id: string;
  name: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
}

/**
 * Composant représentant un menu select
 * 
 * @param props - Les propriétés du composant
 * @param props.label - Le texte affiché dans le label du select
 * @param props.id - L'identifiant unique
 * @param props.name - Le nom du champ pour identifier sa valeur dans le formulaire
 * @param props.value - La valeur actuelle sélectionnée
 * @param props.onChange - La fonction de callback déclenchée à chaque modification de sélection
 * @param props.options - Le tableau des options à afficher dans le menu déroulant
 * @param props.required - Détermine si la sélection est obligatoire, par défaut: false
 * @returns Un élément JSX contenant la structure, le label et le menu déroulant stylisés
 */
function Select({
  label,
  id,
  name,
  value,
  onChange,
  options,
  required = false,
}: SelectProps) {
  return (
      <div className="form-transaction__champ">
        <label htmlFor={id} className="form-transaction__label">
          {label}
        </label>

        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className="form-transaction__select"
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    
  );
}

export default Select