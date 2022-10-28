import './aluno.css';

const Aluno = (props) => {
    return(
        <div className="aluno">
            <div className="cabecalho" style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.curso}</h5>
                <h6>{props.periodo}</h6>
            </div>
        </div>
    )
}

export default Aluno;