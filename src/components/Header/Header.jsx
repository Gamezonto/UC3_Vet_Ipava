import React from 'react';
import logoImage from '../../assets/imgs/Logoi.jpeg';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => (
  <header>
    <div className="banner">
      Ganhe 5% Off em Vacinas Informando o Cupom! 
      <span className="highlight"> Ipava5 </span> na nossa clínica
    </div>
    <nav>
      <div className="logo-container">
        <img src={logoImage} alt="Logo da Loja" className="logo-image" />
        {/* Adicionando o título para Vet Ipava */}
        <h1 className="logo-text">Vet Ipava</h1>
      </div>
      <ul className="navigation-menu">
        <li>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            className="nav-button"
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link 
            to="locate" 
            smooth={true} 
            duration={500} 
            className="nav-button"
          >
            Localização & Horários
          </Link>
        </li>
        <li>
          <Link 
            to="sobre" 
            smooth={true} 
            duration={500} 
            className="nav-button"
          >
            Sobre Nós
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

