import { Row } from "react-bootstrap"
import Courseslist from "../components/courseslist"


function Courses() {
  return (
    <>
     <Row className="w-100 mt-4" >
      <h1 className="text-center">Courses list</h1>
     
    </Row>
    <Row className="container mx-auto">
      <Courseslist/>
      </Row></>
  )
}

export default Courses
