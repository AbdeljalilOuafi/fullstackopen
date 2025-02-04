import personService from '../services/persons'
import DeleteButton from './DeleteButton'



const Persons = ({persons, setPersons, setMessage}) => {

    const handleDelete = (id, name) => {
        const result = window.confirm(`Delete ${name} ?`)
        if (result) {
            personService.deletePerson(id)
            .then(() => {
                setPersons(persons.filter((person) => person.id !== id))
            })
            .catch(() => {
                setMessage({content: `Information of ${name} has already been removed from server`, type: 'error'})
            })
        }
    }
    return (
        <div>
            {persons.map((person) => {
                return (
                <div key={person.id}>{person.name} {person.number}
                <DeleteButton onClick={() => {handleDelete(person.id, person.name)}} text='Delete'/>
                </div>
                );
            }
            )}
        </div>
        )
}

export default Persons