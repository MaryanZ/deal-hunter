import "./App.css";
import VehicleCard from "./components/VehicleCard";
import SearchFilters from "./components/SearchFilters";


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
            <SearchFilters />
          </section>

          <section className="listings-grid">
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
