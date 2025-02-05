import { useState, useEffect } from 'react'
import Input from './components/Input'
import countriesService from './services/countries'
import FilterCountries from './components/DisplayCountries'

function App() {
  const [Allcountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countryInput, setCountryInput] = useState('')

  const handleCountryChange = (event) => {
    setCountryInput(event.target.value)
  }

  useEffect(() => {
    countriesService.getAll()
      .then((data) => setAllCountries(data) )
      .catch((err) => alert(`Failed to fetch countries: ${err.message}`));
    }, []);

  useEffect(() => {
    
    if (countryInput.trim() === '') {
      setFilteredCountries([]);
      return;
    }

    const searchTerm = countryInput.toLowerCase()
    const filteredData = Allcountries.filter((country) => country.name.common.toLowerCase().includes(searchTerm))
    setFilteredCountries(filteredData)
  }, [countryInput])
  

  return (
    <div>
      <Input onChange={handleCountryChange} countryInput={countryInput}/>
      <FilterCountries countries={filteredCountries}/> 
    </div>
  )
}

export default App
