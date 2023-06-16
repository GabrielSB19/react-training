import React from 'react';
import logo from './logo.svg';
import Componente from './componentes/Componente';
import './App.css';
import Propiedades from './componentes/Propiedades';
import Estado from './componentes/Estado';
import RenderizadoCondicional from './componentes/RenderizadoCondicional';
import RenderizadoElementos from './componentes/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './componentes/Eventos';
import ComunicacionComponentes from './componentes/ComunicacionComponentes';
import CicloVida from './componentes/CicloVida';
import AjaxApis from './componentes/AjaxApis';
import ContadorHooks from './componentes/ContadorHooks';
import ScrollHooks from './componentes/ScrollHooks';
import RelojHooks from './componentes/RelojHooks';
import AjaxHooks from './componentes/AjaxHooks';
import HooksPersonalizados from './componentes/HooksPersonalizados';
import Referencias from './componentes/Referencias';
import Formularios from './componentes/Formularios';
import Estilos from './componentes/Estilos';
import ComponentesEstilizados from './componentes/ComponentesEstilizados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg="Hola Perra Funcional desde una prop" />
        <hr />
        <Propiedades 
          cadena="Esto es una cadena de texto" 
          number={19}
          boolean = {true}
          array = {[1,2,3]}
          object = {{name:"Gabriel", edad:"19"}}
          elementReact = {<i>Esto es un elemento React</i>}
          funcion={(num) => num*num}
          componenteReact={<Componente msg="Hola sapa"/>}
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr/>
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
        <hr />
        <ContadorHooks />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksPersonalizados />
        <hr />
        <Referencias />
        <hr/>
        <Formularios />
        <hr />
        <Estilos />
        <hr />
        <ComponentesEstilizados />
        <hr />
      </section>
      </header>

    </div>
  );
}

export default App;
