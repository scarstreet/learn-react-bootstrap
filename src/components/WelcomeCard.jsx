import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export const LoginCard = () => {
  const [theme, setTheme] = useState("day");
  useEffect(()=>{
    const currentThemeColor = localStorage.getItem('theme-color')
    if(currentThemeColor) {
      setTheme(currentThemeColor)
    }
  }, [])

  const changeTheme = () => {
    const toSet = theme === 'day'?'night':'day';
    setTheme(toSet)
    localStorage.setItem('theme-color',toSet)

    
  }


  return (
    <Card>
      <Card.Header>
        <div>
          <span>Welcome to The Playground!</span>
          <span style={{ position: "absolute", right: "1.2rem" }}>
            {theme == "day" ? (
              <Icon.SunFill
                onClick={() => {
                  setTheme("night");
                }}
              />
            ) : (
              <Icon.MoonStars
                onClick={() => {
                  setTheme("day");
                }}
              />
            )
            }
          </span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Simply a place I made to play around with react bootstrap theming. For example, try out that button on the top right to change the theme :D
        </Card.Text>
        <Button variant="primary" onClick={() => console.log("Primary")}>
          Primary
        </Button>
      </Card.Body>
    </Card>
  );
};
