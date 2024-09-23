import { Row } from "react-bootstrap";
import Studentlist from "../components/Studentlist";


export default function Student() {
  return (
    <>
     <Row className="w-100 mt-4" >
      <h1 className="text-center">student list</h1>
     
    </Row>
    <Row className="container mx-auto">
      <Studentlist/>
      </Row></>
   
 
  )
}
