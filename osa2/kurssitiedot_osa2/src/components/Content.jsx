import Header from "./Header"
import Part from "./Part"
const Content = (props) => {
    const course = props.parts
    return (
    <>

        {course.map(part => (<li key = {part.id}>{<Part part={part}/>}</li>))}
    </>
  )
}
  export default Content