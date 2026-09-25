interface InputProps {
  label: string;
  id: string;
  type?: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  step?: number | string;
  min?: number | string;
  max?: number | string;
  required?: boolean;
}

/**
 * Composant représentant un champ de saisie
 *
 * @param props - Les propriétés du composant
 * @param props.label - Le texte affiché dans le label de l'input
 * @param props.id - L'identifiant unique
 * @param props.type - Le type HTML de l'input
 * @param props.name - Le nom du champ pour identifier sa valeur dans le formulaire
 * @param props.value - La valeur actuelle du champ
 * @param props.onChange - La fonction de callback déclenchée à chaque modification
 * @param props.placeholder - Le texte indicatif affiché lorsque le champ est vide
 * @param props.step - L'intervalle ou le pas autorisé
 * @param props.min - La valeur minimale autorisée
 * @param props.max - La valeur maximale autorisée
 * @param props.required - Détermine si le champ est obligatoire, par défaut: false
 * @returns Un élément JSX contenant le label et l'input stylisés
 */
function Input({
  label,
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
  step,
  min,
  max,
  required = false,
}: InputProps) {
  return (
    <div className="form-transaction__champ">
      <label htmlFor={id} className="form-transaction__label">
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        step={step}
        min={min}
        max={max}
        required={required}
        className="form-transaction__input"
      />
    </div>
  );
}

export default Input;
