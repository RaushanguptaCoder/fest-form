// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// import {React,useState,UseState} from "react";

// const App = ()=> {
//   let [count, setCount] = useState(0);

//   function increment (){
//     setCount(count+1);
//   }

//   function decrement (){
//     setCount(count-1);
//   }

// function Reset (){
//   setCount(0);
// }
// return (
//   <div>
//     <h1>value:{count}</h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={Reset}>Reset</button>
//   </div>
// );
// };

import React from "react";
import Card from "./card";

const App = ()=>{
  return(
    <>
    <Card name={"Raushan"} age={24} location={"Bhagalpur"}/>
    </>
  );
}

export default App;
