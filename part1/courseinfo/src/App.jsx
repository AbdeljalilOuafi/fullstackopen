const Header = ({course}) => {
  return (
    <>
    <div>
      <h1>{course}</h1>
    </div>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
    <p>{parts[0].name} {parts[0].exercises}</p>
    <p>{parts[1].name} {parts[1].exercises}</p>
    <p>{parts[2].name} {parts[2].exercises}</p>
    </>
  )
}

const Total = ({parts}) => {
  return (
    <>
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
    {
      name: part1,
      exercises: exercises1
    },
    {
      name: part2,
      exercises: exercises2
    },
    {
      name: part3,
      exercises: exercises3
    }
  ]
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App