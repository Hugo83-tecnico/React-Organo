import React from "react";
import './Campo.css';

const Campo = ({type = 'text', label, placeholder, required = 'false', value, setValue})=>{
    
    const textTip = (event)=>{
        setValue(event.target.value);
     }

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={textTip} 
                required={required} 
                placeholder={placeholder}/>
        </div>
    )
};

export default Campo;