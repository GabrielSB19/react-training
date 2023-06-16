import React, {useState} from "react";

/*
export default function Formularios (){

    const[nombre, setNombre] = useState("")
    const[sabor, setSabor] = useState("vanilla")
    const[lenguaje, setLenguaje] = useState("---")
    const[terminos, setTerminos] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault()
        alert("El formulario se ha enviado")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                <p>Elige tu Sabor JS favorito:</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={e => setSabor(e.target.value)} defaultChecked/>
                <label htmlFor="vanilla">Vanilla</label>
                <input type="radio" id="React" name="sabor" value="react" onChange={e => setSabor(e.target.value)}/>
                <label htmlFor="React">React</label>
                <input type="radio" id="Angular" name="sabor" value="angular" onChange={e => setSabor(e.target.value)}/>
                <label htmlFor="Angular">Angular</label>
                <h5>{sabor}</h5>
                <p>Elige tu lenguaje de programcion favorito:</p>   
                <select name="lenguaje" onChange={e => setLenguaje(e.target.value)} defaultValue="---">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                </select>
                <h5>{lenguaje}</h5>
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={e => setTerminos(e.target.checked)}/>
                <h5>{terminos} Pruebas</h5>
                <input type="submit"/>


            </form>
        </>
    )
}
*/

export default function Formularios (){

    const[form, setForm] = useState({})

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        })
    }


    const handleSubmit = e =>{
        e.preventDefault()
        alert("El formulario se ha enviado")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}/>
                <p>Elige tu Sabor JS favorito:</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange} defaultChecked/>
                <label htmlFor="vanilla">Vanilla</label>
                <input type="radio" id="React" name="sabor" value="react" onChange={handleChange}/>
                <label htmlFor="React">React</label>
                <input type="radio" id="Angular" name="sabor" value="angular" onChange={handleChange}/>
                <label htmlFor="Angular">Angular</label>
                <p>Elige tu lenguaje de programcion favorito:</p>   
                <select name="lenguaje" onChange={handleChange} defaultValue="---">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                </select>
                <br></br>
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>
                <input type="submit"/>


            </form>
        </>
    )
}