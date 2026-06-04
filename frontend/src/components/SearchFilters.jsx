function SearchFilters() {
  return (
    <section className="search-panel">
      <div className="search-header">
        <h2>Search Vehicles</h2>
        <p>Filter by make, model, price, mileage, and year.</p>
      </div>

      <div className="filters-grid">
        <label>
          Make
          <input type="text" placeholder="Honda" />
        </label>
        <label>
          Model
          <input type="text" placeholder="Civic" />
        </label>
        <label>
          Min Year
          <input type="number" placeholder="2012" />
        </label>

        <label>
          Max Year
          <input type="number" placeholder="2018" />
        </label>

        <label>
          Max Price
          <input type="number" placeholder="10000" />
        </label>

        <label>
          Max Mileage
          <input type="number" placeholder="Any" />
        </label>
      </div>
      <button className="search-button">Search deals</button>
    </section>
  );
}
export default SearchFilters;