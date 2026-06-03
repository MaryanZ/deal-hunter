import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">🚗 Deal Hunter</div>
        <button className="hamburger">☰</button>
      </nav>

      <div className="dashboard">
        <aside className="sidebar">
          <p>Dashboard</p>
          <p>Listings</p>
          <p>Favorites</p>
          <p>Saved Searches</p>
        </aside>

        <main className="main-content">
          <section className="hero-section">
            <h1>Vehicle Marketplace Dashboard</h1>
            <p>Find underpriced cars before everyone else.</p>
          </section>

          <section className="search-area">
            <input type="text" placeholder="Search vehicles..." />
            <input type="text" placeholder="Max price" />
            <input type="text" placeholder="Max mileage" />
            <button>Search</button>
          </section>

          <section className="listings-grid">
            <div className="vehicle-card">
              <div className="vehicle-image">Image</div>
              <h2>2015 Honda Civic</h2>
              <p className="price">$7,000</p>
              <p>168,000 miles • 2015</p>
              <span className="deal-score">Good Deal</span>
            </div>

            <div className="vehicle-card">
              <div className="vehicle-image">Image</div>
              <h2>2012 Acura TL</h2>
              <p className="price">$6,500</p>
              <p>115,000 miles • 2012</p>
              <span className="deal-score">Great Deal</span>
            </div>

            <div className="vehicle-card">
              <div className="vehicle-image">Image</div>
              <h2>2016 Mazda 3</h2>
              <p className="price">$8,200</p>
              <p>102,000 miles • 2016</p>
              <span className="deal-score">Fair Deal</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;