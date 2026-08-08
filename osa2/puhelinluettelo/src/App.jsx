import { useState } from 'react'
import Form from "./components/Form"
import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567", id: 1 }
  ]) 

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Add a new</h2>
      <Form persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      {persons.map(names =>
          <Name key={names.id} name ={names.name} number={names.number}/>
        )}
    </div>
  )

}

export default App