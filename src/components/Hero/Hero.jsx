import React from 'react';
import './Hero.css'; // 

const Hero = () => {
  const phoneNumber = '551155173003'; // 

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.`;
    window.open(url, '_blank'); // Abre o link em uma nova aba
  };

  return (
    <section className="hero-card">
      <div className="hero-content">
        <h1>A Clínica completa para todas as necessidades do seu pet!</h1>
        <div className="btn-group">
          <button className="btn-filled-dark" onClick={handleWhatsAppClick}>
            <span className="material-symbols-outlined">Agende uma consulta</span> Via WhatsApp
          </button>
          <button className="btn-outline-dark">
            <span className="material-symbols-outlined">PetShop</span> Conheça nossos serviços
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={require('../../assets/imgs/vet.jpg')} alt="Pet e Pessoa" />
      </div>
    </section>
  );
};

export default Hero;
