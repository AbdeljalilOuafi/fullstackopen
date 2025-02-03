import personService from '../services/persons'
import DeleteButton from './DeleteButton'



const Persons = ({persons, setPersons}) => {

    const handleDelete = (id, name) => {
        const result = window.confirm(`Delete ${name} ?`)
        if (result) {
            personService.deletePerson(id)
            .then(() => {
                setPersons(persons.filter((person) => person.id !== id))
            })
        }
    }
    return (
        <div>
            {persons.map((person) => {
                return (
                <div key={person.id}>{person.name} {person.number}
                <DeleteButton onClick={() => {handleDelete(person.id, person.name, setPersons)}} text='Delete'/>
                </div>
                );
            }
            )}
        </div>
        )
}

export default Persons