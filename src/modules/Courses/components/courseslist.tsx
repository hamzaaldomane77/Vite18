import { Button, Card, Col, Row } from "react-bootstrap"
import { getcourses } from "../serves/list";
import { useEffect, useState } from "react";
import { TCourses } from "../type/list.type";




function courseslist() {
    const  [courses, setcourses] =useState<TCourses>([]);

    useEffect(()=> {
        getcourses(setcourses)
    },
    []);
  return (
   <>
   
  <Row>
     {courses.map((course: TCourses, index: number) => (
       <Col key={index} lg={4} md={6} sm={12} className="mb-4">
         <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" src={course.url}  style={{width:'100%' , height:'100%'}}/>
           <Card.Body>
             <Card.Title>{course.title}</Card.Title>
             <Card.Text>{course.description}</Card.Text>
             <Button variant="primary">Learn More</Button>
           </Card.Body>
         </Card>
       </Col>
     ))}
   
   </Row>
   
   </>
  )
}

export default courseslist