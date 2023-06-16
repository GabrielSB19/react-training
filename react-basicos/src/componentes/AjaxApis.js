import React, {Component} from "react";

export default class AjaxApis extends Component{

    state = {
        pokemons: []
    }

    componentDidMount(){
        /*
        let url = "https://pokeapi.co/api/v2/pokemon"
        fetch(url).then(res => res.json()).then(json => {
            console.log(json);
            json.results.forEach(el => {
                fetch(el.url).then(res => res.json()).then(json => {
                    console.log(json);
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    }
                    let pokemons = [...this.state.pokemons, pokemon]

                    this.setState({pokemons})
                })
            })
        })
        */
        let url = "https://pokeapi.co/api/v2/pokemon/"
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                let pokemons = [];
                json.results.forEach((el) => {  
                    fetch(el.url)
                    .then((res) => res.json())
                    .then((jsonResult) => {
                            let pokemon = {
                                id:jsonResult.id,
                                name:jsonResult.name,
                                avatar:jsonResult.sprites.front_default,
                            };
                           pokemons = [...pokemons, pokemon];
                           this.setState({pokemons})
                    })                   
            });
        })
    }

    render(){
        return(
            <>
                <h2>Peticiones asincronicas en Componentes de clase</h2>
                {this.state.pokemons.length === 0 ? <h3>Cargando</h3> : (
                    this.state.pokemons.map(el => (<Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)))}
            </>
        )
    }
}

function Pokemon (props){
    return (
        <figure>
            <img src={props.avatar} alt = {props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}