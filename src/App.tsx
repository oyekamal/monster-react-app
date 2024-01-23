import { Container } from "react-bootstrap";

import Home from "./Container/Home/Home";
import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
