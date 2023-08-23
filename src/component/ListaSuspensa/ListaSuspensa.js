import React from "react";
import './ListaSuspensa.css'

const ListaSuspensa = ({ label, items, required, value, setValue })=>{


    const selectValue = (event)=>{
        setValue(event.target.value);
     }

    return(
        <div className="lista-suspensa">
            <label>{ label }</label>
            <select value={value} onChange={selectValue}required={required}>
                <option value=""></option>
                {items.map(item=>{ return <option key={item}>{item}</option> })}        
            </select>
        </div>
    )
}

export default ListaSuspensa