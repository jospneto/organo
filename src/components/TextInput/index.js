import './textinput.css';

const TextInput = (props) => {
    const placeholderModified = `${props.placeholder}...`;
    
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="text-input">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModified}/>
        </div>
    );
}

export default TextInput;