

const Name = (props) => <li>{props.name} {props.number} <button onClick={()=> props.remove()}>delete</button></li>

export default Name