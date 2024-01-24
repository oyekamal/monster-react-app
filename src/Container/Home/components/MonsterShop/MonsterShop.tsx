import { FormControl, Card, InputGroup } from "react-bootstrap";
import ListMonster from "../ListMonster/ListMonster";
import fetchData from "../../api/get";
import { useRef, useState, useEffect } from "react";

const MonsterShop = () => {
  const [apidata, setApidata] = useState([]);

  // this useeffect is called when component is mounted or loaded
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetchData(url, setApidata);
  }, []);

  return (
    <div className="text-center">
      <div>
        <h1>Monster Shop</h1>
      </div>
      <div>
        <div>We sell every type of Monster here</div>
        <div>
          for all type of needs, we got you covered from stronge to cute any
          type.
        </div>
        <div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Monster Search"
              aria-label="Monster Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <br />
        <div>
          <ListMonster monster_data={apidata} />
        </div>
      </div>
    </div>
  );
};

export default MonsterShop;
