import Product from "./Product";
import { useContext } from "react";
import ProductsContext from "../ProductsContext";

function Products() {
  const { products, filter } = useContext(ProductsContext);
  return (
    <section className="products">
      {products
        .filter((product) => !filter || product.category === filter)
        .map(({ id, image, title, price }) => (
          <Product img={image} title={title} price={"$" + price} id={id} />
        ))}
    </section>
  );
}

export default Products;
