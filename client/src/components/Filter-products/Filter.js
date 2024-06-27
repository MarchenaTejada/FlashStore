import React, { useState } from 'react';
import './Filter.css'

const Filter = () => {
  const [filters, setFilters] = useState({
    marca: '',
    precio: '',
    tamano: '',
    ram: '',
    os: '',
    generacion: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const filterOptions = [
    { id: 'marca', label: 'Marca', values: ['Apple', 'Samsung', 'Huawei', 'Xiaomi'] },
    { id: 'precio', label: 'Precio', values: ['$300', '$300-$600', '$600-$1000', '$1000'] },
    { id: 'tamano', label: 'Tamaño de pantalla', values: ['5.0"', '5.0" - 6.0"', '6.0"'] },
    { id: 'ram', label: 'Memoria Ram', values: ['4GB', '4GB - 8GB', '8GB'] },
    { id: 'os', label: 'Sistema Operativo', values: ['Android', 'iOS', 'Windows'] },
    { id: 'generacion', label: 'Generación', values: ['1ra', '2da', '3ra', '4ta', '5ta'] }
  ];

  return (
    <aside className="filter">
      <div className="dropdown">
        <div className="dropdown-title">Smartphone</div>
        <ul className="dropdown-content">
          {filterOptions.map(option => (
            <li key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="item"
                onChange={() => handleFilterChange(option.id, option.label)}
                checked={filters[option.id] === option.label}
              />
              <label htmlFor={option.id}>{option.label}</label>
              <ul className="submenu">
                {option.values.map(value => (
                  <li key={value}><a href="#">{value}</a></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
