interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

/**
 * Composant représentant un bouton.
 *
 * @param props - Les propriétés du composant
 * @param props.children - Le contenu affiché à l'intérieur du bouton
 * @param props.type - Le type HTML du bouton
 * @param props.className - Les classes CSS optionnelles pour le style
 * @returns Un élément JSX représentant un bouton stylisé
 */

function Button({ children, type = "button", className }: ButtonProps) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
