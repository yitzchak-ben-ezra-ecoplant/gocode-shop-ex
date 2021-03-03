import Product from "./Product";
import { useContext } from "react";
import ProductsContext from "../ProductsContext";

function Products({ priceFilter }) {
  const { products, filter } = useContext(ProductsContext);
  return (
    <section className="products">
      {products
        .filter(({ category }) => !filter || category === filter)
        .filter(
          ({ price }) =>
            !priceFilter || (price >= priceFilter[0] && price <= priceFilter[1])
        )
        .map(({ id, image, title, price }) => (
          <Product
            key={id}
            img={image}
            title={title}
            price={"$" + price}
            id={id}
          />
        ))}
    </section>
  );
}

export default Products;
