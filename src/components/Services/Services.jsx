import React from 'react';
import './Services.css'; // Estilos específicos dos serviços

const services = [
  {
    id: 'veterinary',
    title: 'Consulta Veterinária',
    subtitle: 'Agende uma consulta com preços acessíveis e garanta que seu melhor amigo receba o cuidado que merece!',
    img: require('../../assets/imgs/vetdog.jpeg')
  },
  {
    id: 'exams',
    title: 'Diversos Exames',
    subtitle: 'Saúde em primeiro lugar! Realizamos exames completos para garantir o bem-estar do seu pet.',
    img: require('../../assets/imgs/examedog.jpg')
  },
  {
    id: 'groom',
    title: 'Banho e Tosa',
    subtitle: 'Seu pet merece um dia de spa! Venha conhecer nossos tratamentos especiais de banho e tosa.',
    img: require('../../assets/imgs/dogbanho.jpeg')
  },
  {
    id: 'shop',
    title: 'Pet Shop',
    subtitle: 'Seu pet merece o melhor! Venha descobrir produtos e serviços que fazem a diferença.',
    img: require('../../assets/imgs/dogshop.jpeg')
  }
];

const Services = () => (
  <section className="services-section">
    <h2 className="services-title">Nossos Serviços</h2>
    <ul className="services">
      {services.map((service) => (
        <li key={service.id} className="service-card">
          <div className="card-content">
            <div className="card-image">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="card-text">
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Services;

