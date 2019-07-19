import React from "react";
import ReactDOM from "react-dom";

const getButtonText = name => {
  return "click me " + name + " !";
};

const App = () => {
  let myName = "Shashank";
  return (
    <div className="form-container">
      <label htmlFor="name">Enter Name:</label>
      <input id="name" type="text" />
      {/* <button style={{ backgroundColor: "lightblue", color: "black" }}>
        Submit
      </button> */}
      <input
        type="button"
        style={{ backgroundColor: "lightblue", color: "black" }}
        value={getButtonText(myName)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
