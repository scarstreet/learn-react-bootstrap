// import logo from './logo.svg';
import "./App.css";
import "./styling/theme1.scss";

import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import { LoginCard } from "./components/WelcomeCard";

function App() {
  var [number, setNumber] = useState(0);
  var buttons = [
    {
      lable: "+",
      funct: () => {
        setNumber(number + 1);
      },
    },
    {
      lable: "-",
      funct: () => {
        setNumber(number - 1);
      },
    },
    {
      lable: "^2",
      funct: () => {
        setNumber(number * number);
      },
    },
    {
      lable: "reset",
      funct: () => {
        setNumber(0);
      },
    },
  ];

  return (
    <div className="App">
      <Container>
        <Col>
          <LoginCard />
        </Col>
      </Container>
    </div>
  );
}

export default App;

