import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-container">
      {/* Seções do Footer */}
      <div className="footer-section">
        <h3>Serviços</h3>
        <ul>
          <li><a href="#consultations">Consultas</a></li>
          <li><a href="#exams">Exames</a></li>
          <li><a href="#surgeries">Cirurgias</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Sobre Nós</h3>
        <ul>
          <li><a href="#history">Nossa História</a></li>
          <li><a href="#mission">Missão e Visão</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Conecte-se</h3>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
          <li><a href="https://wa.me/551155173003" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2024 Vet Ipava. Todos os direitos reservados.</p>
      <p>Desenvolvido por Will Dev</p>
    </div>
  </footer>
);

export default Footer;
