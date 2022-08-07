import "./button.scss";

export const BakeryButton = ({ className, Icon, text, onClick }) => {
  return (
    <div className={`bakery-button ${className || ""}`} onClick={onClick}>
      {Icon && <Icon className="button-icon" />}
      <p className="button-text">{text}</p>
    </div>
  );
};
