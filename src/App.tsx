import { Container } from "react-bootstrap";

import Home from "./Container/Home";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container fluid>
        <NavigationBar />
        <Home></Home>
        <Footer />
      </Container>
    </>
  );
}

export default App;
