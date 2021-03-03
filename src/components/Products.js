import Product from "./Product";
import { useContext } from "react";
import ProductsContext from "../ProductsContext";
import { Link } from "react-router-dom";

function Products() {
  const { products, filter } = useContext(ProductsContext);
  return (
    <section className="products">
      {products
        .filter((product) => !filter || product.category === filter)
        .map(({ id, image, title, price }) => (
          <Link key={id} to={`/product-details/${id}`}>
            <Product img={image} title={title} price={"$" + price} />
          </Link>
        ))}
    </section>
  );
}

export default Products;
