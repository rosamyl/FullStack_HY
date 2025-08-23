import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>
const Header = ({text}) => <h1>{text}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics= (props) => {
  return (
    console.log(props)
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] =useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)



  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(all + updatedGood)
    setScore(score+1)
    setAverage((score / all))
    setPositive(100*updatedGood / all)

  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(all+updatedNeutral)
    setAll(all+1)
    setAverage((score / all))
    setPositive(100*good / all)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(all+1)
    setScore(score - 1)
    setAverage((score / all))
    setPositive(100*good / all)
  }

  return (
    <div>
      <Header text="give a feedback"/>
      <Button onClick={handleGoodClick} text={'good'}/>
      <Button onClick={handleNeutralClick} text={'neutral'}/>
      <Button onClick={handleBadClick} text={'bad'}/>

      <Header text={"statistics"} />
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive}%</p>
    
  
    </div>

  )
}

export default App