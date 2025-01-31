import { useState } from 'react'
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setPhoneNumber] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newPhoneNumber,
      id: persons.length + 1
    }

    if (persons.find((person) => person.name == newPerson.name)) {
      alert(`${newName} is already added to phonebook`)
    } else if (persons.find((person) => person.number == newPhoneNumber)) {
      alert(`${newPhoneNumber} already exists`)
    } else {
    setPersons(persons.concat(newPerson))
    setNewName('')
    setPhoneNumber('')
    }
  }

  const filterData = (event) => {
    const value = event.target.value.toLowerCase()
    setSearchInput(value)
    const result = persons.filter((person) => 
      person.name.toLowerCase().includes(value)
    )
    setSearchResult(result)
  }
  return (
    <div>
      <h2>Phonebook</h2>

      <Search onChange={filterData} searchInput={searchInput} searchResult={searchResult}/>

      <h2>Add a new</h2>

      <PersonForm 
        addPerson={addPerson} newName={newName} setNewName={setNewName} 
        newPhoneNumber={newPhoneNumber} setPhoneNumber={setPhoneNumber}
      />

      <h3>Numbers</h3>

      <Persons persons={persons}/>
    </div>
  )
}

export default App
