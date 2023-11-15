// Importa las dependencias necesarias
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Componente de la Página de Inicio
const Home = () => <h2>Inicio</h2>;

// Componente de la Página Acerca de
const About = () => <h2>Acerca de</h2>;

// Componente principal de la aplicación
const App = () => {
  return (
    <Router>
      <div>
        {/* Navegación con Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
          </ul>
        </nav>

        {/* Definición de las Rutas */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
