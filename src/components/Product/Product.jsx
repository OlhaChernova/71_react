import "./styles.css";

function Product({ productName, productPrice }) {
  return (
    <div className="product-wrapper">
      <h3>{productName}</h3>
      {productPrice && <div>{productPrice}$</div>}
    </div>
  );
}

export default Product;