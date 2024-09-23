
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { TTechers } from "../type/list";

import { getTechers } from "../serves/list";




function TechersList() {

  const  [Techer, setTechers] =useState<TTechers>([]);

useEffect(()=> {
  getTechers(setTechers)
},
[]);






  return (
    <Table  striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>id</th>
        <th>userId</th>
        <th>title</th>
        <th>completed</th>
      </tr>
    </thead>
    <tbody>
      {Techer.map((item :TTechers) =>  
        {   
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          
        
      );
    
    })}
     
    </tbody>
  </Table>
  )
}

export default TechersList
