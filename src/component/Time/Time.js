import React from "react";
import hexToRgba from 'hex-to-rgba';
import './Time.css'

import Card from "../Card/Card";

const Time = ({time, colaboradores,  deleteStaff, corTime})=>{

    return(

        (colaboradores.length > 0) ? <section className="time" style={{backgroundColor: hexToRgba(time.cor, '0.4')}}>
            <input type="color" value={time.cor} onChange={evento=> corTime(evento.target.value, time.id)} className="input-cor"/>
            <h3 style={{borderColor: time.cor}} >{time.nome}</h3>
            <div className="staff">
                {colaboradores.map((colaborador, indece) => {

                         return <Card
                       
                            key={indece}
                            colaborador={colaborador}
                            corFundo={time.cor}
                            deleteStaff={deleteStaff}
                         />


                    }
                )}
            </div>
        </section>
        : ''

    )
}

export default Time;