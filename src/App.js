import Header from "./components/header";
import Products from "./components/products";
import { uniqBy } from "lodash";
import { useEffect, useMemo, useState } from "react";
import ProductsContext from "./contexts";

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  const filters = useMemo(() => {
    return uniqBy(products, "category").map((product) => product.category);
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, filters, filter, setFilter }}>
      <div>
        <Header />
        <Products />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
