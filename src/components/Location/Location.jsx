import React from 'react';
import './Location.css'; // CSS para a estilização

const Locations = () => (
  <section id="locate">
    <div className="location-content">
      {/* Mapa da clínica */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7937105291783!2d-46.7652597!3d-23.7238619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4d11affd7f79%3A0x1c00c32ff19d149e!2sClinica%20Veterinaria%2C%20Pet%20Shop%2C%20Banho%20e%20Tosa%20Elizabeth!5e0!3m2!1sen!2sbr!4v1698417887079!5m2!1sen!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Clínica"
        ></iframe>
      </div>

      {/* Informações de localização */}
      <div className="location-card">
        <h2>Estamos Localizados no Coração do Bairro Cidade Ipava</h2>
        <p>
          Nosso atendimento é de Segunda a Sábado, das <strong>07:00 às 20:00</strong>, 
          e aos Domingos, das <strong>07:00 às 15:00</strong>. <br />
          Nossa equipe dedicada e experiente está sempre pronta para oferecer o melhor 
          cuidado e carinho para o seu pet. Venha nos visitar e descubra como podemos fazer a diferença!
        </p>
      </div>
    </div>
  </section>
);

export default Locations;
