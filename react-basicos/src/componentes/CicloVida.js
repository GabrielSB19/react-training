import React, {Component} from "react";

export default class CicloVida extends Component{
    constructor(props){
        super(props)
        //console.log(0, "El componente se inicializa, ojo aún no esta en el DOM");
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null;
    }

    componentDidMount(){
        //console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProvs, prevState){
        //console.log(2, "El estado o las props del componente han cambiado");
        console.log(prevProvs);
        console.log(prevState);
    }


    tictac = e =>{
        this.temporizador = setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    iniciar = e => {
        this.tictac();
        this.setState({
            visible: true
        })
    }

    detener = e => {
        clearInterval(this.temporizador)
        this.setState({
            visible: false
        })
    }


    render(){
        //console.log(4, "El componente se dibuja o redibuja por algun cambio en el DOM");
        return(
            <div>
                <h2>Ciclo de vida de los componentes de clase</h2>
                {this.state.visible && <Reloj hora = {this.state.hora} />}
                
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>

            </div>
        )
    }
}

class Reloj extends Component{


    componentWillUnmount(){
        //console.log(3, "El componente ha sido eliminado del DOM");
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
}