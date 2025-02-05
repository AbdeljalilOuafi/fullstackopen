import axios from "axios"

const getWeather = (capital, key) => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}`
    return axios
        .get(baseURL)
        .then((response) => response.data )
        .catch((err) => console.log(`Error fetching Weather: ${err.message}`))
}

export default { getWeather }