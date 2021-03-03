import { useContext, useMemo, useEffect } from "react";
import ProductsContext from "../ProductsContext";
import { Slider } from "antd";

function Header({ setPriceFilter, priceFilter }) {
  const sorts = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new",
  ];
  const { filters, setFilter, products, filter } = useContext(ProductsContext);

  const prices = useMemo(() => {
    return products
      .filter((product) => !filter || product.category === filter)
      .map((product) => product.price);
  }, [products, filter]);

  const [min, max] = useMemo(() => {
    return [Math.floor(Math.min(...prices)), Math.ceil(Math.max(...prices))];
  }, [prices]);

  useEffect(() => {
    setPriceFilter([min, max]);
  }, [setPriceFilter, min, max]);

  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <Slider
          style={{ width: 200 }}
          range
          min={min}
          max={max}
          value={priceFilter}
          onChange={(e) => setPriceFilter(e)}
        />
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={(e) => setFilter(e.target.value)}>
            {["", ...filters].map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            {sorts.map((sort) => (
              <option key={sort} value="/">
                {sort}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
