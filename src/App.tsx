import {
  Container,
  FormControl,
  Card,
  InputGroup,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Monster Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

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

        <div>
          <br />
          <Card className="text-center">
            <Card.Footer className="text-muted">
              created by: oykamal
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default App;
