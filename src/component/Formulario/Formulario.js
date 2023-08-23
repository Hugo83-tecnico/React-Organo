import React, { useState }from "react";
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import './Formulario.css';
import Botao from "../Botao/Botao";


const Formulario = ({ recebeColaborador, times })=>{


    const [name, setName] =  useState('');
    const [cargo, setCargo] =  useState('');
    const [imagem, setImagem] =  useState('');
    const [time, setTime] =  useState('');

   
    // O botão dentro de um form por default tem a função de submeter um formulario
    const saveForm = (event)=>{
        event.preventDefault();                // Metodo evita que pagina renderize toda
        recebeColaborador({                    //Forma enxuta de criar um objeto
            name,
            cargo,
            imagem,
            time
        })
        
        setName('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <section className="formulario">
            <form onSubmit={saveForm}>
                <h2>Prencha os dados para criar o card do colaborador</h2>

                <CampoTexto 
                    value={name}
                    setValue={value => setName(value)} 
                    required={true} label='Nome' 
                    placeholder="Digite seu nome"
                />

                <CampoTexto
                    value={cargo}
                    setValue={value => setCargo(value)} 
                    required={true} label='Cargo' 
                    placeholder="Digite seu cargo"
                />

                <CampoTexto 
                    value={imagem}
                    setValue={value => setImagem(value)} 
                    required={true} 
                    label='Imagem' 
                    placeholder="Informe o endereço da imagem"
                />

                <ListaSuspensa  
                    value={time}
                    setValue={value => setTime(value)}
                    label='Time' 
                    items={times}
                />

                <Botao className="btn primary">Criar Card</Botao>

            </form>
        </section>
    )
}

export default Formulario