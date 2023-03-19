// import logo from './logo.svg';
import "./App.css";
import "./styling/bootstrap-edit.scss";

import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

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
          <Row style={{justifyContent:"center"}}>{number}</Row>
          <Row>
            {buttons.map((btn) => (
              <Col>
                <Button
                  style={{width:"100%"}}
                  variant="primary"
                  onClick={() => {
                    btn.funct();
                  }}
                >
                  {btn.lable}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;

