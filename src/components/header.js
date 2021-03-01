function Header() {
    const filters = ['All Jackets', '2016', 'jacket', 'jackets', 'layers', 'Obermeyer', 'Roxy', 'womens']
    const sorts = ['Featured', 'Best Selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high', 'Price, high to low', 'Date, new to old', 'Date, old to new']

    return (
        <nav className="product-filter">
            <h1>Jackets</h1>
            <div className="sort">
                <div className="collection-sort">
                    <label>Filter by:</label>
                    <select>
                        {filters.map(filter => <option value="/">{filter}</option>)}
                    </select>
                </div>
                <div className="collection-sort">
                    <label>Sort by:</label>
                    <select>
                        {sorts.map(sort => <option value="/">{sort}</option>)}
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Header;