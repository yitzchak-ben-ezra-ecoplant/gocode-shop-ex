import { Link } from "react-router-dom";

function Product({ img, title, price, id }) {
  return (
    <div className="product-card">
      <Link key={id} to={`/product-details/${id}`}>
        <div className="product-image">
          <img alt="product-img" src={img} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
        </div>
      </Link>
    </div>
  );
}

export default Product;
