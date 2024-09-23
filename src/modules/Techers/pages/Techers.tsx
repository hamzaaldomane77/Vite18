import { Row } from "react-bootstrap";

import TechersList from "../components/TechersList";


export default function Techers() {
  return (
    <>
    <Row className="w-100 mt-4" >
    <h1 className="text-center">Techer list</h1>
   
  </Row>
  <Row className="container mx-auto">
    <TechersList/>
    </Row>
    </>
  )
}
