import React, {Component} from "react";

export default class Padre extends Component{

    state={
        contador:0
    }

    incrementarCondator = e =>{
        this.setState({
            contador: this.state.contador+1
        })
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <Hijo incrementarCondator={this.incrementarCondator} mensaje="Mensaje para el hijo 1" />
                <Hijo incrementarCondator={this.incrementarCondator} mensaje="Mensaje para el hijo 2" />
                <h4>{this.state.contador} Sapa</h4>
            </>
        )
    }
}

function Hijo(props){
    return(
        <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.incrementarCondator}>+</button>
        </>
    )
}