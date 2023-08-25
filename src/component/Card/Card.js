import React from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import './Card.css';


const Card = ({colaborador,corFundo, deleteStaff })=>{
    

    return(
        <div className="container" >
            <AiFillCloseCircle size={25} className="delete" onClick={()=> deleteStaff(colaborador.id)}/>
            <div className="header" style={{ backgroundColor: corFundo }} >
                <img src={colaborador.imagem} alt="Imagem Card"/>
            </div>
            <div className="footer">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Card;