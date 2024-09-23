import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
type TDataItem = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  website?: string;
  phone?: string;
  company?: {
    name: string;
  };
};

type TData = Arrye<TDataItem>;

const Studentlist = () => {
  const [data, setData] = useState<TData>([]);
  const [reCallCounter, setreCallCounter] = useState(0);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, [reCallCounter]);

  return (
    <>
      <Button
        onClick={() => setreCallCounter((reCallCounter) => reCallCounter + 1)}
      >
        {" "}
        re render data
        {reCallCounter}
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th> Name</th>
            <th>Last Name</th>
            <th>email </th>
            <th>website </th>
            <th>phone </th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>{item.phone}</td>
                <td>{item.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Studentlist;
