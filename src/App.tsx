import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useRef, useState, useEffect } from "react";

function App() {
  const [display, setDisplay] = useState([]);
  const [apidata, setApidata] = useState([]);

  const inputRef = useRef();

  const gettext = () => {
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

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    console.log("hit");
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setApidata(json);
        setDisplay(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        placeholder="search"
        aria-label="search"
        id="search"
        onChange={gettext}
      />
      <Button variant="btn-primary">Button</Button>
      <ListGroup variant="flush">
        {display.map((item, index) => (
          <ListGroup.Item>{item.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default App;
