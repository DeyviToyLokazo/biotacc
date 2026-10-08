import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSeedling, 
  FaLeaf, 
  FaChevronDown, 
  FaLayerGroup, 
  FaTimes, 
  FaCheck,
  FaFilter
} from 'react-icons/fa';
import '../styles/CategoryAccordion.css';

const CategoryAccordion = ({
  categoryTree,
  selectedCategory,
  selectedSubcategory,
  onSelectCategory,
  onSelectSubcategory,
  onClearFilters,
  productCounts = { total: 0, byCategory: {}, bySubcategory: {} }
}) => {
  // Mantener abiertas las secciones por defecto o la que esté seleccionada
  const [openSections, setOpenSections] = useState({
    Fertilizantes: true,
    Foliares: true
  });

  const toggleSection = (catName, e) => {
    if (e) e.stopPropagation();
    setOpenSections(prev => ({
      ...prev,
      [catName]: !prev[catName]
    }));
  };

  const handleCategoryClick = (catName) => {
    // Si la sección está cerrada, la abrimos al hacer clic
    if (!openSections[catName]) {
      setOpenSections(prev => ({ ...prev, [catName]: true }));
    }
    onSelectCategory(catName);
  };

  const isAllActive = !selectedCategory && !selectedSubcategory;

  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Fertilizantes':
        return <FaSeedling className="cat-icon" />;
      case 'Foliares':
        return <FaLeaf className="cat-icon" />;
      default:
        return <FaFilter className="cat-icon" />;
    }
  };

  return (
    <aside className="category-accordion-card">
      <div className="accordion-card-header">
        <div className="header-title-wrap">
          <FaFilter className="header-icon" />
          <h2 className="header-title">Categorías</h2>
        </div>
        {(!isAllActive) && (
          <button 
            type="button" 
            className="btn-clear-inline"
            onClick={onClearFilters}
            title="Limpiar filtros"
            aria-label="Limpiar filtros"
          >
            <FaTimes /> Limpiar
          </button>
        )}
      </div>

      {/* Botón Ver Todos los Productos */}
      <div className="all-products-wrapper">
        <button
          type="button"
          className={`all-products-btn ${isAllActive ? 'active' : ''}`}
          onClick={onClearFilters}
        >
          <div className="btn-content-left">
            <FaLayerGroup className="all-icon" />
            <span className="btn-text">Todos los productos</span>
          </div>
          <span className="count-badge">{productCounts.total}</span>
        </button>
      </div>

      <div className="accordion-divider" />

      {/* Lista de Acordeón Jerárquico */}
      <div className="accordion-list">
        {categoryTree.map((cat) => {
          const isOpen = !!openSections[cat.name];
          const isCategorySelected = selectedCategory === cat.name && !selectedSubcategory;
          const isCategoryActiveParent = selectedCategory === cat.name;
          const catCount = productCounts.byCategory[cat.name] || 0;

          return (
            <div 
              key={cat.name} 
              className={`accordion-group ${isCategoryActiveParent ? 'has-active-child' : ''}`}
            >
              {/* Encabezado de Categoría Principal */}
              <div 
                className={`accordion-header ${isCategorySelected ? 'active-category' : ''}`}
                onClick={() => handleCategoryClick(cat.name)}
              >
                <div className="header-left">
                  {getCategoryIcon(cat.name)}
                  <span className="category-name">{cat.name}</span>
                </div>

                <div className="header-right">
                  <span className="count-badge count-main">{catCount}</span>
                  <button
                    type="button"
                    className={`chevron-btn ${isOpen ? 'open' : ''}`}
                    onClick={(e) => toggleSection(cat.name, e)}
                    aria-label={`Alternar ${cat.name}`}
                  >
                    <FaChevronDown />
                  </button>
                </div>
              </div>

              {/* Subcategorías con animación suave */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="accordion-content-collapse"
                  >
                    <ul className="subcategories-list">
                      {/* Opción para filtrar todos de esta categoría principal */}
                      <li className="subcategory-item-wrapper">
                        <button
                          type="button"
                          className={`subcategory-btn subcategory-all-btn ${isCategorySelected ? 'active' : ''}`}
                          onClick={() => handleCategoryClick(cat.name)}
                        >
                          <span className="subcat-indicator">
                            {isCategorySelected && <FaCheck className="check-icon" />}
                          </span>
                          <span className="subcat-name">Ver todo en {cat.name}</span>
                          <span className="count-badge subcount">{catCount}</span>
                        </button>
                      </li>

                      {cat.subcategories.map((subcat) => {
                        const isSubSelected = 
                          selectedCategory === cat.name && selectedSubcategory === subcat;
                        const subCount = 
                          productCounts.bySubcategory[subcat] || 0;

                        return (
                          <li key={subcat} className="subcategory-item-wrapper">
                            <button
                              type="button"
                              className={`subcategory-btn ${isSubSelected ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectSubcategory(cat.name, subcat);
                              }}
                            >
                              <span className="subcat-indicator">
                                {isSubSelected && <FaCheck className="check-icon" />}
                              </span>
                              <span className="subcat-name">{subcat}</span>
                              <span className="count-badge subcount">{subCount}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default CategoryAccordion;
