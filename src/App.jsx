import { useState } from "react";
import "./App.css";
import Team from "./Count";
import Friends from "./Friends";
import Countries from "./components/Countries/Countries";

function App() {
  // row function
  // function handleCliked(){
  //   alert('btn clicked')
  // }

  // arrow function
  const handleCliked = () => {
    alert("btn cliked");
  };

  // vejailla function
  const addNumber = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>React core concepts part 2</h1>

      {/* import jsx */}
      <Countries></Countries>

      {/* <Friends></Friends> */}
      {/* <Team></Team> */}

      {/* normal js events stytem */}
      {/* <button onclick="handleCliked()"> Clicked</button> */}

      {/* es6 event rules*/}
      {/* <button onClick={handleCliked}> Clicked</button> */}

      {/* inline arrow function*/}
      {/* <button
        onClick={() => {
          alert("btn cliked 3");
        }}
      >
        {" "}
        Clicked 3
      </button> */}

      {/* function er moddhe function */}
      {/* <button onClick={() => addNumber(5)}> Add Number</button> */}
    </>
  );
}

export default App;
