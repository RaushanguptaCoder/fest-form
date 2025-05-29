import React, {  useContext } from 'react'
import Child3 from './Child3'
import { postman } from './App'

const Child4 = () => {
    const data = useContext(postman)
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.age}</p>
    </div>
  )
}

export default Child4
