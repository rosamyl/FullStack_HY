const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part parts={parts[0]} />
      <Part parts={parts[1]} />
      <Part parts={parts[2]} />  
    </div> 
  )
}  

const Total = ({parts}) => {
  return (
      <p>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
  )
}

const Part = ({parts}) => {
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  )
}

export default App