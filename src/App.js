import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Header from "./pages/Header";
import { Container } from "react-bootstrap";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Header />
      <Container>
        <Router />
      </Container> 
    </BrowserRouter>
  );
}

export default App;
