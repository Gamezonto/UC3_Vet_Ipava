import React from 'react';
import './Sobre.css'; // Estilos específicos para o componente About Us
import clinicImage from '../../assets/imgs/Clinica.png'; // Imagem da clínica

// Importando imagens para cada sub-card
import dogImage from '../../assets/imgs/veterinario1.png';
import doctorImage from '../../assets/imgs/pet-shop.png';
import heartImage from '../../assets/imgs/veterinario.png';
import pawImage from '../../assets/imgs/veterinario2.png';

const AboutUs = () => (
  <section className="about-us">
    <div className="main-card">
      {/* Imagem da clínica à esquerda */}
      <div className="image-content">
        <h3>Nossa Clínica</h3>
        <img src={clinicImage} alt="Nossa Clínica" className="clinic-image" />
      </div>

      {/* Sub-cards à direita */}
      <div className="cards-container">
        <div className="info-card">
          <div className="sub-card">
            <img src={dogImage} alt="Cachorro" className="sub-card-image" />
            <p>Na IpavaVets, a saúde do seu pet é a nossa prioridade.</p>
          </div>
        </div>
        <div className="info-card">
          <div className="sub-card">
            <img src={doctorImage} alt="Médico Veterinário" className="sub-card-image" />
            <p>Sua clínica veterinária e Casa de Ração de confiança, sempre ao lado do seu animal.</p>
          </div>
        </div>
        <div className="info-card">
          <div className="sub-card">
            <img src={heartImage} alt="Coração" className="sub-card-image" />
            <p>Nossa missão: garantir bem-estar e felicidade para seu melhor amigo.</p>
          </div>
        </div>
        <div className="info-card">
          <div className="sub-card">
            <img src={pawImage} alt="Pata" className="sub-card-image" />
            <p>Atendimento especializado para uma vida saudável e feliz.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;

