import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Header from "./pages/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Router />
      </Container> 
    </BrowserRouter>
  );
}

export default App;
