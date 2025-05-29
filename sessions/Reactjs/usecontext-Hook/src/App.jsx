import React, { createContext } from 'react'
import Child from './child';


export const postman = createContext();
const App = () => {
  const data = {
    name : "Raushan",
    age : 23 ,
  };
  return (
     <postman.Provider value={data}>
    <div>
      <Child/>
    </div>
    </postman.Provider>
  );
};

export default App ;

