import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Mexico</h3>
      <SelectList
        title="estado"
        url="https://api.copomex.com/query/get_estados?token=pruebas"
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=pruebas`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectAnidados;
