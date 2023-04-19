import { useState } from "react";
import "./campo.css"

const Campo = (props) =>{
        const placeholderModificado = `${props.placeholder}...`; /*Le agregamos 3 puntos al final del placeholder que traemos desde formulario.js*/

        //destructuracion
        const { type = "text" } = props

        const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return  <div className={`campo campo-${type}`}>
                <label>{props.titulo}</label>
                <input placeholder={placeholderModificado} required={props.required} value={props.valor} onChange={manejarCambio} type={type} />
            </div>
}

export default Campo