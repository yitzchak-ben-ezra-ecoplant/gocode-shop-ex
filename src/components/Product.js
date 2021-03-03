function Product({ img, title, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img alt="product-img" src={img} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>
    </div>
  );
}

export default Product;
