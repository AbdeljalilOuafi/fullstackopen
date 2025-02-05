const Input = ({onChange, countryInput}) => {
    return (
        <div>
            <label htmlFor="country-input">Find countries </label>
            <input type="text" id="country-input" value={countryInput} onChange={onChange}/>
        </div>
    )
}

export default Input