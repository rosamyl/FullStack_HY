import { useState, useEffect } from 'react'
import personService from './services/persons'

import Form from './components/Form'
import Name from './components/Name'
import Filter from './components/Filter'
import Notification from './components/Notification'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState(null)
  const [value, setValue] = useState('2')

  useEffect(() => {
    personService.getAll().then((initialPeople) => {
      setPersons(initialPeople)
    })
  }, [])

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
    const nameObject = {
      name: newName,
      number: newNum
    }

    if (newName === '') {
      return
    }

    // tarkistaa onko sekä nimi ja numero olemassa jollain
    const bothExisting = persons.find(both => both.name === newName && both.number === newNum)
    if (bothExisting) {
      alert(`${newName} already exists with this number`)
      setNewName('')
      setNewNum('')
      return
    }

    // jos jollain on nimi mutta eri numero ==> kysyy vaihetaanko nimi
    const existing = persons.find(existing => existing.name === newName)
    if (existing) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)){
        personService.update(existing.id, nameObject)
        .then(updatedContact => {setPersons(persons.map((person)=> person.id !== existing.id ? person : updatedContact))})
        .catch((error)=>{
          alert(`the person ${existing.name} is already deleted from the server`)
          setPersons(persons.filter(p=> p.id !== existing.id))
        })
      }
      setNewName('')
      setNewNum('')
      setValue('1')
      setMessage(`Changed ${existing.name}'s number`)
      setTimeout(()=>{
        setMessage(null)
        setValue('2')
      }, 3000)
      return
    }

    personService.create(nameObject).then(createdPerson => {
    setPersons(persons.concat(createdPerson))
    setNewName('')
    setNewNum('')
    })
    setValue('1')
    setMessage(`Added ${nameObject.name}`)
    setTimeout(()=>{
      setMessage(null)
      setValue('2')
    }, 3000)

  }

  const namesToShow = persons.filter(person =>
    person.name.toLowerCase().includes(findName.toLowerCase())
  )

  const removePressed = (person) => {
    
    console.log('here remove!')
    if (window.confirm(`Delete ${person.name}?`)){
      console.log('deleting', person.name)
      personService.remove(person.id).then(() => {
        setPersons(persons.filter(person_i => person_i.id !== person.id))
      })
    }
    setValue('0')
    setMessage(`Removed ${person.name}`)
    setTimeout(()=>{
      setMessage(null)
      setValue('2')
    }, 3000)
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} value={value}/>

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
            remove={()=>removePressed(person)}
          />
        )
      }

    </div>
  )
}

export default App