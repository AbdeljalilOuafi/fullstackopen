const Search = ({onChange, searchInput, searchResult}) => {
    return (
        <div>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" onChange={onChange} value={searchInput} />
        {searchInput
          ? searchResult.map((person) => (
              <div key={person.id}>{person.name} {person.number}</div>
            ))
          : ""
        }
      </div>
    )
}

export default Search