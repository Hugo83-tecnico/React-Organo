import React from "react";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Card.css';


const Card = ({colaborador,corFundo, deleteStaff,clickFavoritar })=>{
    const favoritar = ()=>{
        clickFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size:25,
        onClick: favoritar
    }

    return(
        <div className="container" >
            <AiFillCloseCircle size={25} className="delete" onClick={()=> deleteStaff(colaborador.id)}/>
            <div className="header" style={{ backgroundColor: corFundo }} >
                <img src={colaborador.imagem} alt="Imagem Card"/>
            </div>
            <div className="footer">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito 
                        ? <AiFillHeart color="red"{...propsFavorito}/> 
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;