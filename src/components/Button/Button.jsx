import "./styles.css";

function Button({ type = "button", name, variant = "blue" }) {
  return (
    <button className={`button ${variant}`} type={type}>
      {name}
    </button>
  );
}

export default Button;
