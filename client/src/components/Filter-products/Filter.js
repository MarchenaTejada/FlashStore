import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {
  const [filters, setFilters] = useState({
    marca: '',
    precio: '',
    tamano: '',
    ram: '',
    os: '',
    generacion: ''
  });
  
  const [expanded, setExpanded] = useState(null);

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const handleToggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const filterOptions = [
    { id: 'marca', label: 'Marca', values: ['Apple', 'Samsung', 'Huawei', 'Xiaomi'] },
    { id: 'precio', label: 'Precio', values: ['S/ 0 - S/ 300', 'S/ 300 - S/ 600', 'S/ 600 - S/ 1000', 'Mayor a S/ 1000'] },
    { id: 'tamano', label: 'Tamaño de pantalla', values: ['5.0"', '5.0" - 6.0"', '6.0"'] },
    { id: 'ram', label: 'Memoria Ram', values: ['4GB', '4GB - 8GB', '8GB'] },
    { id: 'os', label: 'Sistema Operativo', values: ['Android', 'iOS', 'Windows'] },
    { id: 'generacion', label: 'Generación', values: ['1ra', '2da', '3ra', '4ta', '5ta'] }
  ];

  return (
    <aside className="filter">
      <div className="dropdown">
        <div className="dropdown-title">Filtrar</div>
        <ul className="dropdown-content">
          {filterOptions.map(option => (
            <li key={option.id}>
              <button 
                className="accordion-header" 
                onClick={() => handleToggleExpand(option.id)}
              >
                {option.label}
                <span className={`accordion-icon ${expanded === option.id ? 'expanded' : ''}`}>+</span>
              </button>
              <div className={`accordion-content ${expanded === option.id ? 'show' : ''}`}>
                {option.values.map(value => (
                  <div 
                    key={value} 
                    className={`filter-option ${filters[option.id] === value ? 'selected' : ''}`}
                    onClick={() => handleFilterChange(option.id, value)}
                  >
                    <span className="filter-label">{value}</span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
