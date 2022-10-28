import { useState } from 'react';
import Banner from './components/Banner/banner';
import Forms from './components/Forms';
import Projeto from './components/Projeto';

function App() {
  const projetos = [
    {
      nome: 'PIBIT',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },

    {
      nome: 'PIBIC',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },

    {
      nome: 'IFSertão',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'LabMaker',
      corPrimaria: '#e06b69',
      corSecundaria: '#57c278'
    },

    {
      nome: 'LabAlimentos',
      corPrimaria: '#fff5d9',
      corSecundaria: '#e06b69'
    },
  ]

  const [alunos, setAlunos] = useState([])

  const aoNovoAlunoAdicionado = (aluno) => {
    debugger
    setAlunos([...alunos, aluno])
  }

  return (
    <div className="App">
      <Banner />
      <Forms projetos={projetos.map(projeto => projeto.nome)} aoAlunoCadastrado={aluno => aoNovoAlunoAdicionado(aluno)}/>
      {
        projetos.map(projeto => <Projeto 
          key={projeto.nome} 
          nome={projeto.nome} 
          corPrimaria={projetos.corPrimaria} 
          corSecundaria={projeto.corSecundaria}
          alunos={alunos.filter(aluno => aluno.projeto === projeto.nome)}/>)
      }
    </div>
  );
}

export default App;
