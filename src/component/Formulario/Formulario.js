import React, { useState }from "react";
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import './Formulario.css';
import Botao from "../Botao/Botao";


const Formulario = ({ recebeColaborador, times, cadastrarTime})=>{


    const [nome, setName] =  useState('');
    const [cargo, setCargo] =  useState('');
    const [imagem, setImagem] =  useState('');
    const [time, setTime] =  useState('');

    const [nomeTime, setNomeTime] =  useState('');
    const [corTime, setCorTime] =  useState('');

   
    // O botão dentro de um form por default tem a função de submeter um formulario
    const saveForm = (event)=>{
        event.preventDefault();                // Metodo evita que pagina renderize toda
        recebeColaborador({                    //Forma enxuta de criar um objeto
            nome,
            cargo,
            imagem,
            time
        })
        
        setName('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const cadastrarNovoTime = (event)=>{
        event.preventDefault();
        cadastrarTime({nome: nomeTime, cor: corTime});
        setNomeTime('');
        setCorTime('');

    }



    return(
        <section className="formulario">
            <form onSubmit={saveForm}>
                <h2>Prencha os dados para criar o card do colaborador</h2>

                <CampoTexto 
                    value={nome}
                    setValue={value => setName(value)} 
                    required={true} 
                    label='Nome' 
                    placeholder="Digite seu nome"
                />

                <CampoTexto
                    value={cargo}
                    setValue={value => setCargo(value)} 
                    required={true} 
                    label='Cargo' 
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
            <form onSubmit={cadastrarNovoTime}>
                <h2>Prencha os dados para criar um novo time</h2>

                <CampoTexto 
                    value={nomeTime}
                    setValue={value => setNomeTime(value)} 
                    required={true} 
                    label='Nome do Time' 
                    placeholder="Digite o nome do time"
                />

                <CampoTexto
                    value={corTime}
                    setValue={value => setCorTime(value)} 
                    required={true} 
                    label='Cor do Time' 
                    placeholder="Digite a cor do time"
                />

                <Botao className="btn primary">Criar Time</Botao>

            </form>
        </section>
    )
}

export default Formulario