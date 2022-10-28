import Aluno from '../Aluno';
import './projeto.css';

const Projeto = (props) => {
    return(
        (props.alunos.length > 0) ? <section className='projeto' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="alunos">
                {props.alunos.map(aluno => <Aluno nome={aluno.nome} key={aluno.nome}
                corDeFundo={props.corPrimaria} curso={aluno.curso} periodo={aluno.periodo} imagem={aluno.imagem}/>)}
            </div>
        </section> : ''
    )
}

export default Projeto;