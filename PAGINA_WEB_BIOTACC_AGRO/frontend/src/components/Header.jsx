import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaLeaf, FaSearch } from 'react-icons/fa';
import { products } from '../data/products';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  // Handle product selection
  const handleProductClick = (productId) => {
    navigate(`/productos/${productId}`);
    setSearchQuery('');
    setShowResults(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/images/logo-main.png" alt="BIOTACC AGRO" className="logo-img" />
          <span className="logo-text">BIOTACC AGRO</span>
        </Link>

        {/* Navigation Menu - In the middle */}
        <nav className="nav-menu-desktop">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contacto</NavLink>
            </li>
          </ul>
        </nav>

        {/* Search Bar - On the right */}
        <div className="search-container" ref={searchRef}>
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => searchQuery && setShowResults(true)}
            />
          </div>

          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(product => (
                <div
                  key={product.id}
                  className="search-result-item"
                  onClick={() => handleProductClick(product.id)}
                >
                  <span className="result-name">{product.name}</span>
                  <span className="result-category">{product.category}</span>
                </div>
              ))}
            </div>
          )}

          {showResults && searchQuery && searchResults.length === 0 && (
            <div className="search-results">
              <div className="no-results">No se encontraron productos</div>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-menu-mobile ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
