import { FormControl, Card, InputGroup } from "react-bootstrap";
import ListMonster from "../ListMonster/ListMonster";
import fetchData from "../../api/get";
import { useRef, useState, useEffect } from "react";

const MonsterShop = () => {
  const [apidata, setApidata] = useState([]);
  const [display, setDisplay] = useState([]);
  const inputRef = useRef();
  // this useeffect is called when component is mounted or loaded
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetchData(url, setApidata);
    setDisplay(apidata);
  }, []);

  const getText = () => {
    console.log("chnage");
    let search = inputRef.current.value;
    const filterItems = (arr, query) =>
      arr.filter(
        (element: object) =>
          element.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );

    if (search === "" || search === undefined) {
      setDisplay(apidata);
    } else {
      setDisplay(filterItems(apidata, search));
    }
  };
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
              ref={inputRef}
              placeholder="Monster Search"
              aria-label="Monster Search"
              aria-describedby="basic-addon1"
              onChange={getText}
            />
          </InputGroup>
        </div>
        <br />
        <div>
          <ListMonster monster_data={display} />
        </div>
      </div>
    </div>
  );
};

export default MonsterShop;
