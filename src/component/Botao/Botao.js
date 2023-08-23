import React from "react";
import './Botao.css';

const Botao = ({children, onClick, className})=> {
   
    const styleDefault = "btn";

    return(
        <button className={className? className : styleDefault } onClick={onClick}>{ children }</button>
    )
}

export default Botao;