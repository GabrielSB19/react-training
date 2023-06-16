import { Link, Route, Routes, useParams } from "react-router-dom";

const Topic = () => {
  let {test} = useParams()
  test = test.toUpperCase()
  return (
    <div>
        <h4>{test}</h4>
        <p>Hola, esta es una prueba para testear rutas anidades, probando: <b>{test}</b></p>
    </div>
  );
};

const ReactTopics = () => {
  return (
    <div>
      <h3>React Topics</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estados</Link>
        </li>
        <li>
          <Link to="componente">Comoponente</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path=""
          element={
            <>
              <h4>Elige un tema de React</h4>
            </>
          }
        ></Route>
      <Route path=":test" element={<Topic />}></Route>

      </Routes>
    </div>
  );
};

export default ReactTopics;
