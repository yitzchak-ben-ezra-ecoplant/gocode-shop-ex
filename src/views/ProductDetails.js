import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, [id]);

  console.log(product);
  const { title, description, image, price } = product;
  return (
    <div>
      <Link to="/">
        <button>Close</button>
      </Link>
      <h1>ProductDetails:</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{"$" + price}</h3>
      <img src={image} alt="product-image" />
    </div>
  );
}

export default ProductDetails;
