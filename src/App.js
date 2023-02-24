import { Container } from "react-bootstrap";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Container className="text-center m-auto ">
      <Header />
      <CardContainer />
      <Footer/>
    </Container>
  );
}

export default App;
