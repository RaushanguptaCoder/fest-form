import React from 'react'
import Card from './Card'
import { useState } from 'react'

const App = () => {
  const [name,setName] = useState("");

  return (
    <div>
      <Card name ={name} setName = {setName}/>
      <p>this is name coming from child: {name}</p>
    </div>
  )
}

export default App ;
