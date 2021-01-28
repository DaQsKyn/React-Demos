import React from "react";
import ReactDom from "react-dom";

const name = "Pesto. J";
const img = "https://picsum.photos/200";

const fStyle = {
  color: "green",
  fontSize: "30px",
  fontFamily: "cambria",
  border: "4px solid yellow",
  borderWidth: "0.5em",
  paddingLeft: "10px"
};
const date = new Date();
const currentTime = date.getHours();

let greeting;
if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}

ReactDom.render(
  <div>
    <h1 style={fStyle}>Hello my name is {name}</h1>

    <div>
      <img src={img + "?grayscale"} alt="random-pic" />
    </div>
    <p className="a">{greeting}</p>
  </div>,
  document.getElementById("root")
);
