import { useState } from 'react'

const Statistics = ({good, neutral, bad, total}) => {
  if ([good, neutral, bad].every(value => value === 0)) {
    return (
      <div>
        <DisplayHeader text='statistics'/>
        <StatisticLine text='No feedback given'/>
      </div>
    )
  } else {
    return (
    <div>
      <DisplayHeader text='statistics'/>
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={total}/>
          <StatisticLine text='average' value={calculateAverage(good, bad, total)}/>
          <StatisticLine text='positive' value={calculatePositive(good, total)}/>
        </tbody>
      </table>
    </div>
    )
  }
}
const DisplayHeader = ({text}) => {
  return (
    <>
    <h2>{text}</h2>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const calculateAverage = (good, bad, total) => {
  if (typeof total !== 'number' || total <= 0) {
    return 0;
  }
  return (good * 1 + bad * -1) / total;
}

const calculatePositive = (good, total) => {
  if (typeof total != 'number' || total <= 0) {
    return 0;
  }
  const result = good / total * 100;
  return `${result} %`
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const incrGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  }

  const incrNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }
  const incrBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  }

  return (
    <div>
      <DisplayHeader text='give feedback'/>
      <Button onClick={incrGood} text='good'/>
      <Button onClick={incrNeutral} text='neutral'/>
      <Button onClick={incrBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App