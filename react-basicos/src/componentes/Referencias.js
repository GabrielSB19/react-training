import React, {useRef} from "react";

export default function Referencias (){
    let refMenu = useRef()
    let refMenuBtn = useRef()



    const handleToggleMenu = (e) =>{
        /*
        Sin referencia, no es bueno hacerlo
        const $menu = document.getElementById("menu")

        if(e.target.textContent === "Menú"){
            e.target.textContent = "Cerrar"
            $menu.style.display = "block"
        } else {
            e.target.textContent = "Menú"
            $menu.style.display = "none"
        }
        */
        if(refMenuBtn.current.textContent === "Menú"){
            refMenuBtn.current.textContent = "Cerrar"
            refMenu.current.style.display = "block"
        } else {
            refMenuBtn.current.textContent = "Menú"
            refMenu.current.style.display = "none"
        }
    }

    return(
        <>
        <h2>Referencias</h2>
        <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
        <nav id="menu" ref={refMenu} style={{display:"none"}}>
            <a href=".com">Seccion 1</a>
            <br />
            <a href=".com">Seccion 2</a>
            <br />
            <a href=".com">Seccion 3</a>
            <br />
            <a href=".com">Seccion 4</a>
            <br />
            <a href=".com">Seccion 5</a>
        </nav>
        </>
    )
}