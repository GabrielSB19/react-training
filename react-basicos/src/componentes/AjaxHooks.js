import React, {useState, useEffect} from "react";

function ShowPokemon ({avatar, name}){
    return (
        <figure>
            <img src={avatar} alt = {name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks(){
   
    const [pokemons, setPokemons] = useState([])

    /*
    
    useEffect(()=>{
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
                           setPokemons(pokemons)
                    })                   
            });
        })
       
    }, [])
    */
    

    /*
    Funcion asincronica, esta mala
    useEffect(()=>{
        const getData = async(url) => {
            let res = await fetch(url),
            json = await res.json()


            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json = await res.json()

                let pokemon = {
                    id:json.id,
                    name:json.name,
                    avatar:json.sprites.front_default,
                };

                
                setPokemons((pokemons)=>[...pokemons, pokemon])
            })
        }
        

        getData("https://pokeapi.co/api/v2/pokemon/")
        
    }, [])
    */

    useEffect(()=>{
        const getData = async(url) =>{
            let res = await fetch(url)
            let json = await res.json()

            json.results.forEach(async (el) => {
                let res = await fetch(el.url)
                let json = await res.json()

                let pokemon = {
                    id:json.id,
                    name:json.name,
                    avatar:json.sprites.front_default,
                };

                setPokemons((pokemons)=>[...pokemons, pokemon])
                
            })

        }

        getData("https://pokeapi.co/api/v2/pokemon/")
    }, [])
   
    return(
        <>
            <h2>Peticiones asincronicas con Hooks</h2>
            {pokemons.length === 0 ? <h3>Sapa...</h3> : (pokemons.map(el => <ShowPokemon key={el.id} name={el.name} avatar={el.avatar}/>))}
        </>
    )
}