const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header>{course}</Header>
      <p>{part1.name} {part1.exercises} </p>
      <p>{part2.name} {part2.exercises} </p>
      <p>{part3.name} {part3.exercises} </p>
    </div>
  )
}

export default App