import React from "react";
import './CampoTexto.css';

const CampoTexto = ({label, placeholder, required, value, setValue})=>{
    
    const textTip = (event)=>{
        setValue(event.target.value);
     }

    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input value={value} onChange={textTip} required={required} placeholder={placeholder}/>
        </div>
    )
};

export default CampoTexto;