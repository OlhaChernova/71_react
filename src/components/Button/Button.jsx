import "./styles.css";

function Button({ type = "button", name, onClick, variant = "blue" }) {
  return (
    <button className={`button ${variant}`} type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
