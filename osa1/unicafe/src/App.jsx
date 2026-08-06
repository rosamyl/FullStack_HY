import { useState } from 'react'

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
    return (
    
      <table>
        <tbody>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={props.all} />
        <StatisticsLine text="average" value={props.average} />
        <StatisticsLine text="positive" value={props.positive} />
        </tbody>
      </table>
    )
}

const StatisticsLine = (props) => {
  return (
    
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  
  const average = () => {
    if (all === 0) {
      return 0
    }
    return +((good - bad) / all).toFixed(2) // formatting to 2 decimal places
  }

  const positive = () => {
    if (all === 0) {
      return 0
    }
    return +((good / all) * 100).toFixed(2)
  }


  const handleClick = (props) => {
    if (props === "good") {
      setGood(good + 1)
    }
    if (props === "neutral") {
      setNeutral(neutral + 1)
    }
    if (props === "bad") {
      setBad(bad + 1)
    }
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={()=>handleClick("good")} text="good" />
      <Button handleClick={()=>handleClick("neutral")} text="neutral" />
      <Button handleClick={()=>handleClick("bad")} text="bad" />
      <h1>statistics</h1>
    
      <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average()}
          positive={positive() + " %"}
      />
    </>
  )
}


export default App