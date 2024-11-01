import React from 'react';
import './App.css'; // Estilos globais, incluindo o gradiente
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Location from './components/Location/Location';
import Sobre from './components/Sobre/Sobre';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            {/* Fundo Gradiente Animado */}
            <div className="background-gradient"></div>

            {/* Componentes da Página */}
            <Header />
            <Hero />
            <Sobre />
            <Services />
            <Location />
            <Footer />
        </div>
    );
}

export default App;
