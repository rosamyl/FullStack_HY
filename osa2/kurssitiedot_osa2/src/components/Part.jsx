const Part = (props) => {
  const part = props.part
  return(
    <>
      {part.name} {part.exercises}
    </>
  )
}

export default Part