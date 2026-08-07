const Total = (props) => {
    const exercises = props.exercises
    console.log('testi', exercises )
    const total = (exercises.reduce((sum, part) => sum += part.exercises, 0))
    return (

        <b>total of {total} exercises</b>
    )
}

export default Total