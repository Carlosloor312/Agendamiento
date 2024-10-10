import React, { useState } from 'react';
import './Menu.css';  // Estilos para el menú desplegable

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado del menú (abierto o cerrado)
  };

  return (
    <div className="menu">
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Icono de menú (hamburguesa) */}
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>

      {/* Mostrar el menú si isOpen es verdadero */}
      {isOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/about">Nosotros</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;