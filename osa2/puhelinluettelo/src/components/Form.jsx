import { useState } from "react"

const Form =(props) => {
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
  
    const addName = (event) => {
      
      event.preventDefault()
      console.log('button clicked', event )
      if (newName === '') {return}
      if (props.persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        return
      }
      
      const nameObject = {
        name: newName, 
        number: newNum,
        id: props.persons.length +1
      }
  
      props.setPersons(props.persons.concat(nameObject))
      setNewName('')
      setNewNum('')
  
    }
    
    const handleNameChange = (event) =>{
      console.log(event.target.value)
      setNewName(event.target.value)
    } 
  
    const handleNumChange = (event) =>{
      console.log(event.target.value)
      setNewNum(event.target.value)
    } 
    return(
      <div>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNum} onChange={handleNumChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
    </div>
    )
  }

  export default Form