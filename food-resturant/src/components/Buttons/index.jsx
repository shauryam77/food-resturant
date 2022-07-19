import './style.css'

export default function Buttons(props) {
    return (
        <div className='buttonStyle'>
            <button id={props.id}  onClick={props.addButton}  className="addButton" >+</button>
            <button id={props.id}  onClick={props.subButton}  className="subButton" >-</button>
        </div>
    )
}