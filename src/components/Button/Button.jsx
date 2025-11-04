import "./styles.css";

function Button({ type, name }) {
  return (
    <button className="button" type={type}>
      {name}
    </button>
  );
}

export default Button;
