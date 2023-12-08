import { Container } from "react-bootstrap";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import "./App.css"
function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer/>
    </Container>
  );
}

export default App;
