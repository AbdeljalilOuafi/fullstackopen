import { useState, useEffect } from "react";
import weatherService from '../services/weather'

const DisplayCountry = ({country}) => {

    const [weatherInfo, setWeatherInfo] = useState(null)
    const countryImage = country.flags?.png ?? country.flags?.svg;
    const countryImageAlt = country.flags?.alt ?? country.name.common
    const capital = country.capital[0]

    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const weatherIconCode = weatherInfo?.weather?.[0]?.icon ?? 'N/A';
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

    useEffect(() => {
        weatherService.getWeather(capital, weatherApiKey)
            .then((data) => setWeatherInfo(data))
            .catch((err) => console.log(`Error fetching weather data: ${err.message}`))
    }, [weatherInfo])

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>{`Capital: ${country.capital?.[0] ?? "N/A"}`}</p>
            <p>{`Area: ${country.area}`}</p>
            <h4>languages:</h4>
            <ul>
                {Object.keys(country.languages).map((key) => (
                    <li key={key}>{country.languages[key]}</li>
                ))}
            </ul>
            <img src={countryImage} alt={countryImageAlt} />
            {capital && weatherInfo && (
                <div>
                    <h2>Weather in {country.capital?.[0] ?? "N/A"}</h2>
                    <p>temperature {(weatherInfo.main.temp - 273).toFixed(2)} Celcius</p>
                    <img src={weatherIconUrl} alt="Weather Icon" />
                    <p>wind {weatherInfo.wind.speed} m/s</p>
                </div>
            )}

        </div>
    )
}


const FilterCountries = ({countries}) => {

    const [selectedCountry, setSelectedCountry] = useState(null)

    // if (selectedCountry) {
    //     return <DisplayCountry country={selectedCountry}/>
    // }
    if (countries.length === 0) {
        return null;
    } else if (countries.length >= 10)  {
        return <p>Too many matches, specify another filter</p>
    } else if (countries.length === 1) {
        return <DisplayCountry country={countries[0]}/>
    } else {   
        return (
            <div>
                {countries.map((country) => {
                    return (
                        <div key={country.area} style={{ marginBottom: "16px" }}>
                        <span>{country.name.common}</span>
                        <button onClick={() => setSelectedCountry(country)}>
                          Show
                        </button>
                        {/* Conditionally render details if this country is selected */}
                        {selectedCountry &&
                          selectedCountry.name.common === country.name.common && (
                            <>
                            <button onClick={() => setSelectedCountry(null)}>Hide</button>
                            <DisplayCountry country={country} />
                            </>
                          )}
                      </div>
                    )
                })
                }
            </div>
        )
    }
}

export default FilterCountries