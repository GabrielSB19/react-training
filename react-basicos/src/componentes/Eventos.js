import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state={
            contador:0
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        console.log("Sumando");
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar(e){
        console.log("Restando");
        this.setState({
            contador: this.state.contador-1
        })
    }



    render(){
        return(
            <div>
                <h2>Eventos de componentes de clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

//Property Initializer
export class EventosES7 extends Component{
    state = {
        contador:0
    }

    sumar = e =>{
        console.log("Sumando");
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar = e =>{
        console.log("Restando");
        this.setState({
            contador: this.state.contador-1
        })
    }



    render(){
        return(
            <div>
                <h2>Eventos de componentes de clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

/*
function Boton(props){
    return(
        <button onClick={props.myOnClick}>Boton hecho por componente</button>
    )
}
*/

/*
const Boton = props => (
    <button onClick={props.myOnClick}>Boton hecho por componente</button>
)
*/

const Boton = ({myOnClick}) => (
    <button onClick={myOnClick}>Boton hecho por componente</button>

)

export class MasSobreEventos extends Component{
    handleClick = (e, msg) =>{
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(msg);
    }


    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e)=>this.handleClick(e, "Hola pasando parametro desde un evento")}>Saludar</button>
                {/* Evento personalizado*/}
                {/* Error*/}
                {/*
                <Boton onClick={(e)=>this.handleClick(e, "Hola pasando parametro desde un evento")}/>
                */}
                <Boton myOnClick ={(e)=>this.handleClick(e, "Hola pasando parametro desde un evento")}/>
            </div>
        )
    }
}