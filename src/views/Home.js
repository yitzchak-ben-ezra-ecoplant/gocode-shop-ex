import Header from "../components/Header";
import Products from "../components/Products";
import { useState } from "react";

function Home() {
  const [priceFilter, setPriceFilter] = useState([-Infinity, Infinity]);

  return (
    <div>
      <Header setPriceFilter={setPriceFilter} priceFilter={priceFilter} />
      <Products priceFilter={priceFilter} />
    </div>
  );
}

export default Home;
