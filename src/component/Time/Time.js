import React from "react";
import './Time.css'

import Card from "../Card/Card";

const Time = ({label, colaboradores, corPrimaria, corSecundaria})=>{

    const css = {backgroundColor:corSecundaria}

    return(

        (colaboradores.length > 0) ? <section className="time" style={css}>
            <h3 style={{borderColor: corPrimaria}} >{label}</h3>
            <div className="staff">
                {colaboradores.map(colaborador => 
                    <Card
                        corDefundo={corPrimaria}
                        key={colaborador.name}
                        nome={colaborador.name}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
        </section>
        : ''

    )
}

export default Time;