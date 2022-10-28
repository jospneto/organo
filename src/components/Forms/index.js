import './forms.css';
import TextInput from '../TextInput/';
import DropDown from '../Drop-DownList';
import Button from '../Button';
import { useState } from 'react';

const Forms = (props) => {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [imagem, setImagem] = useState('')
    const [periodo, setPeriodo] = useState('')
    const [projeto, setProjeto] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoAlunoCadastrado({
            nome, 
            curso, 
            imagem,
            periodo,
            projeto
        })
        setNome('')
        setImagem('')
        setCurso('')
        setPeriodo('')
        setProjeto('')
    }

    return(
        <section className="forms">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Aluno</h2>
                <TextInput obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome}
                aoAlterado={valor => setNome(valor)}/>
                <TextInput obrigatorio={true} label="Curso" placeholder="Digite seu curso" valor={curso}
                aoAlterado={valor => setCurso(valor)}/>
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem}
                aoAlterado={valor => setImagem(valor)}/>
                <TextInput obrigatorio={true} label="Período" placeholder="Digite o seu período de referência" valor={periodo}
                aoAlterado={valor => setPeriodo(valor)}/>
                <DropDown obrigatorio={true} label="Projetos" itens={props.projetos}
                valor={projeto} aoAlterado={valor => setProjeto(valor)}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    );
}

export default Forms;