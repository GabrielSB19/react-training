import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados(){
    let url = "https://pokeapi.co/api/v2/pokemon/"
    let {data, isPending, error} = useFetch(url)
    return(
        <>
            <h2>Hooks personalizados</h2>
            <p>{JSON.stringify(isPending)}</p>
            <p><mark>{JSON.stringify(error)}</mark></p>
            <p>{JSON.stringify(data, undefined, 2)}</p>
        </>
    )
}