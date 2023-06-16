import {  useLocation, useNavigate } from "react-router-dom";

const Productos = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const LIMIT = 20
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;

  let history = useNavigate()

  const handlePrev = (e) => {
    history(`?inicio=${start - LIMIT}&fin=${end-LIMIT}`)   
  }
  const handleNext = (e) => {
    history(`?inicio=${start + LIMIT}&fin=${end+LIMIT}`)   
  }

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start>LIMIT && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Productos;
