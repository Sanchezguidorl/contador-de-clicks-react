import React from "react";
import '../styles/Botones.css'
function Boton({esBotonClick, texto, manejarClick}){
return(
        <button className={esBotonClick?'boton-click':'boton-reset'} onClick={manejarClick} >
            {texto}
        </button>

);
}

export default Boton;