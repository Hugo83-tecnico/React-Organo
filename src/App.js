import React, { Fragment, useState } from 'react';
import Banner from './component/Banner/Banner';
import Formulario from './component/Formulario/Formulario';
import Time from './component/Time/Time';


function App(){

  const conteudoAlura = [
  {
    nome:'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9',
  },
  {
    nome:'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
  },
  {
    nome:'Data Sciense',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
  },
  {
    nome:'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
  }


]

  const [colaboradores, setColaboradores] = useState([])

  const guardaColaborador = (colaborador)=>{
    setColaboradores([...colaboradores,colaborador])
    
  }


  return(
    <Fragment>
      <Banner/>
      <Formulario times={conteudoAlura.map(conteudo => conteudo.nome)} recebeColaborador={colaborador =>(guardaColaborador(colaborador))}/>
      {conteudoAlura.map(time =>
        <Time 
          key={time.nome}
          label={time.nome} 
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        
  
        />
      )}

    </Fragment>

  )
}

export default App;



//http://github.com/Hugo83-tecnico.png