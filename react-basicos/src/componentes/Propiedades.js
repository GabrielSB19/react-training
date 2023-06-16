import React from "react";
import PropTypes from "prop-types"

export default function Propiedades (props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.number}</li>
                <li>{props.boolean ? "Verdadero" : "Falso"}</li>
                <li>{props.array.join(", ")}</li>
                <li>{props.object.nombre + " - " + props.object.edad}</li>
                <li>{props.elementReact}</li>
                <li>{props.array.map(props.funcion).join(", ")}</li>
                <li>{props.componenteReact}</li>

            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto:"Las Props",
}

Propiedades.propTypes = {
 number: PropTypes.number.isRequired,
};