import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label for='name'>Enter Name:</label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: "lightblue", color: "black" }}>
        Submit
      </button>
      <input
        type='button'
        style={{ backgroundColor: "lightblue", color: "black" }}
        value='Submit'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
