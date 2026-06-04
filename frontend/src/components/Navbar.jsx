function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🚗 Deal Hunter</div>

      <div className="nav-links">
        <a href="#">Dashboard</a>
        <a href="#">Listings</a>
        <a href="#">Favorites</a>
      </div>

      <button className="hamburger">☰</button>
    </nav>
  );
}

export default Navbar;