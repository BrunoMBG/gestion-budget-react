interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

/**
 * Composant représentant un bouton.
 *
 * @param props - Les propriétés du composant
 * @param props.children - Le contenu affiché à l'intérieur du bouton
 * @param props.type - Le type HTML du bouton
 * @param props.className - Les classes CSS optionnelles pour le style
 * @param props.onClick - La fonction de callback déclenchée lors du clic sur le bouton
 * @returns Un élément JSX représentant un bouton stylisé
 */

function Button({ children, type = "button", className, onClick }: ButtonProps) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
