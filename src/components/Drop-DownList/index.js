import './drop-down.css';

const DropDown = (props) => {
    return(
        <div className="drop-down">
            <label>
                {props.label}
            </label>
            <select required={props.obrigatorio} onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value={""}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDown;