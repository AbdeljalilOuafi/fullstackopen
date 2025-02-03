import { useState, useEffect } from 'react'
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setPhoneNumber] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    personService.getAll()
      .then((notes) => {
        setPersons(notes)
      })
      .catch((err) => {
        alert(`Error fetching data from server: ${err}`)
      })
  })

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newPhoneNumber,
    }

    const existingPerson = persons.find((person) => person.name === newPerson.name)
    if (existingPerson) {
      if (existingPerson.number === newPerson.number) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
            personService.updatePerson(existingPerson.id, newPerson)
              .then((updatedPerson) => {
                setPersons(persons.filter((person) => person.id === existingPerson.id ? updatedPerson : person))
              })
              .catch(err => alert(`Update failed: ${err}`));
          }
      return;
    }

    personService.createPerson(newPerson)
      .then((note) => {
        setPersons(persons.concat(note))
      })
      .catch((err) => {
        alert(`Error creating person on the server: ${err}`)
      })
    setNewName('')
    setPhoneNumber('')
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

      <Persons persons={persons} setPersons={setPersons}/>
    </div>
  )
}
export default App


