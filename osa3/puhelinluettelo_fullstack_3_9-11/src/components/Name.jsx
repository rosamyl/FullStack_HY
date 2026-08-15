

const Name = (props) => <li className="contact">{props.name} {props.number} <button onClick={()=> props.remove()}>delete</button></li>

export default Name