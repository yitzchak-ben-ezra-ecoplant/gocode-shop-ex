import Product from "./product";
import { useContext } from "react";
import ProductsContext from "../contexts";

function Products() {
  const { products, filter } = useContext(ProductsContext);
  return (
    <section className="products">
      {products
        .filter((product) => !filter || product.category === filter)
        .map((product) => (
          <Product
            key={product.id}
            img={product.image}
            title={product.title}
            price={"$" + product.price}
          />
        ))}
    </section>
  );
}

export default Products;
