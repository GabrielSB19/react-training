import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import ReactTopics from "../pages/ReactTopics";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const BasicConcepts = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Acerca</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Acerca />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <h2>BasicConcepts</h2>
      <Router>
        <MenuConceptos />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Acerca />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/acerca"
            element={
              <>
                <Navigate to="/about" />
              </>
            }
          />
          <Route
            path="/contacto"
            element={
              <>
                <Navigate to="/contact" />
              </>
            }
          />
          <Route path="/react/*" element={<ReactTopics />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default BasicConcepts;
