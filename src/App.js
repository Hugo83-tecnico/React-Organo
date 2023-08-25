import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './component/Banner/Banner';
import Formulario from './component/Formulario/Formulario';
import Time from './component/Time/Time';
import './App.css';


function App(){


  const [cursos, setCursos]=  useState ([
  {
    id: uuidv4(),
    nome:'Programação',
    cor: '#D9F7E9',
  },
  {
    id: uuidv4(),
    nome:'Front-End',
    cor: '#E8F8FF',
  },
  {
    id: uuidv4(),
    nome:'Data Sciense',
    cor: '#F0F8E2',
  },
  {
    id: uuidv4(),
    nome:'Devops',
    cor: '#FDE7E8',
  }

]);

const inicial = [
  {
    id: uuidv4(),
    nome: 'HUGO GOMES',
    favorito: false,
    cargo: 'Desenvolvedor junior',
    imagem: 'https://github.com/Hugo83-tecnico.png',
    time: cursos[3].nome
  }
]


  const [colaboradores, setColaboradores] = useState(inicial)

  const deletarColaborador = (id)=>{
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const alterarCorDoTime = (cor, id)=>{
      setCursos(cursos.map(curso =>{
          if(curso.id === id){
            curso.cor = cor;
          }
          return curso;
      }))
  }

  const cadastrarTime = (novoTime)=>{
    setCursos([...cursos,{...novoTime, id:uuidv4() }])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id)
        colaborador.favorito = !colaborador.favorito;
        return colaborador
      
    }))
  };


  return(
    <Fragment>
      <Banner/>
      <Formulario 
        times={cursos.map(curso => curso.nome)} 
        recebeColaborador={colaborador => setColaboradores([...colaboradores,colaborador])}
        cadastrarTime={cadastrarTime}
      />
       
      <h1 className='titulo-organograma'>Minha Organização</h1>
      {cursos.map((time, indice) =>
        <Time 
       
          key={indice}
          corTime={alterarCorDoTime}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          deleteStaff={deletarColaborador}
          clickFavoritar={resolverFavorito}
  
        />
      )}

    </Fragment>

  )
}

export default App;

