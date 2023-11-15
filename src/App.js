import React from 'react';
import './css/styles.css';  // Importa tus estilos 

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Cookies from './components/Cookies';
import Terminos from './components/Terminos'; 
import Privacidad from './components/Privacidad';  
import Inicio from './components/inicio';  
import logo from './img/1.png';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo de la empresa" />
        <ul className="navbar-menu">
          <li className="navText nav-item">
            <Link to="/inicio" className="navText">
              EduZona012
            </Link>
          </li>
        </ul>
      </div>

      <ul className="navbar-menu">
        <li className="navText nav-item"><Link className="navText" to="/login">Login</Link></li>
        <li className="navText nav-item"><Link className="navText" to="/registro">Registro</Link></li>
        <li className="navText nav-item"><Link className="navText" to="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
        <li className="navText nav-item"><Link className="navText" to="/quienes-somos">¿Quiénes Somos?</Link></li>
      </ul>

    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/inicio" element={<Inicio />} /> 
        </Routes>
          

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logo} alt="Logo de la empresa" />
              </div>
            </div>
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros:</p>
              <p>Correo electrónico: zona012huazalingo@gmail.com</p>
              <p>Teléfono: +52 771-191-3179</p>
            </div>

            <div className="footer-section">
              <h3>Enlaces Útiles</h3>
              <p><Link to="/privacidad" className="custom-link">Política de privacidad</Link></p>
              <p><Link to="/terminos" className="custom-link">Términos y condiciones</Link></p>
              <p><Link to="/cookies" className="custom-link">Política de Cookies</Link></p>
            </div>

            <div className="footer-section">
              <h3>Síguenos en Redes Sociales</h3>
              <p><Link to="/ " className="custom-link">Facebook</Link></p>
              <p><Link to="/" className="custom-link">Instagram</Link></p>
            </div>
 
            <div className="footer-section">
              <h3>Nuestra Ubicación</h3>
              <p>Dirección: Calle Principal, Ciudad, País</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
