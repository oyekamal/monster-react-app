import { FormControl, Card, InputGroup } from "react-bootstrap";

const MonsterShop = () => {
  return (
    <Card className="text-center">
      <Card.Header>
        <h1>Monster Shop</h1>
      </Card.Header>
      <Card.Body>
        <Card.Title>We sell every type of Monster here</Card.Title>
        <Card.Text>
          for all type of needs, we got you covered from stronge to cute any
          type.
        </Card.Text>
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
        <div></div>
      </Card.Body>
    </Card>
  );
};

export default MonsterShop;
