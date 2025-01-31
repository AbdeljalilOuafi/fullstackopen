const PersonForm = ({ addPerson, newName, setNewName, newPhoneNumber, setPhoneNumber}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
            Name: <input value={newName} onChange={(event) => {setNewName(event.target.value)}}/>
            </div>

            <div>
            <label htmlFor="phoneNumber">Number</label>
            <input id="phoneNumber" type='tel' value={newPhoneNumber} onChange={(event) => {setPhoneNumber(event.target.value)}}/>
            </div>

            <div>
            <button type="submit" >add</button>
            </div>
        </form>
    )
}

export default PersonForm