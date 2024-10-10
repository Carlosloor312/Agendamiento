import React from 'react';
import { Link } from 'react-router-dom';  // Para la navegación entre páginas
import './Header.css';
import Menu from './Menu';  // Importa el componente Menu

function Header() {
  return (
    <header className="header">
      <h1>Agendamiento de Talleres para Autos de Gama Alta</h1>
      
      {/* Este es el lugar donde usamos el componente Menu */}
      <Menu />

      {/* Enlaces de navegación */}
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;