import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menú con enlaces HTML (No recomendado):</span>
          <a href="/">Home</a>
          <a href="/contact">Contacto</a>
          <a href="/about">Acerca</a>
        </li>
        <li>
          <span>Componente Link:</span>
          <Link to="/">Home</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/about">Acerca</Link>
          <Link to="/no-exist">Error 404</Link>
        </li>
        <li>
          <span>Comoponente NavLink:</span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contacto
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            Acerca
          </NavLink>
          <NavLink to="/no-exist" activeclassname="active">
            Error 404
          </NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <Link to="/usuario/Gabriel">Gabriel</Link>
          <Link to="/usuario/Suarez">Suarez</Link>
        </li>
        <li>
          <span>Parametros de consulta</span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones</span>
          <Link to="/acerca">About</Link>
          <Link to="/contacto">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas</span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas</span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
