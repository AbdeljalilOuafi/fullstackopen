const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}! You are {props.age} old</p>
    </div>
  )
}

const App = () => {
  const name = 'Ouafi';
  const age = 23
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Peter' age={20 + 2}/>
      <Hello name={name} age={age} />
    </div>
  )
}

export default App