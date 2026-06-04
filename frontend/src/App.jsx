import "./App.css";
import SearchFilters from "./components/SearchFilters";
import Navbar from "./components/Navbar";
import ListingsGrid from "./components/ListingsGrid";

function App() {
  return (
    <div className="app">
        <Navbar />

        <main className="main-content">
          <section className="hero-section">
            <h1>Vehicle Marketplace Dashboard</h1>
            <p>Find underpriced cars before everyone else.</p>
          </section>

          <section className="search-area">
            <SearchFilters />
          </section>
          <ListingsGrid />
        </main>
      </div>
  );
}

export default App;
