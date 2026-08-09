import { useState } from 'react'
import Form from './components/Form'
import Name from './components/Name'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 }
  ])

  const [findName, setFindName] = useState('')

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const handleFindChange = (event) => {
    setFindName(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    if (newName === '') {
      return
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    const nameObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNum('')
  }

  const namesToShow = persons.filter(person =>
    person.name.toLowerCase().includes(findName.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter
        findName={findName}
        handleFindChange={handleFindChange}
      />

      <h2>Add a new</h2>

      <Form
        newName={newName}
        newNum={newNum}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
        addName={addName}
      />

      <h2>Numbers</h2>

      {namesToShow.map(person =>
          <Name
            key={person.id}
            name={person.name}
            number={person.number}
          />
        )
      }
    </div>
  )
}

export default App