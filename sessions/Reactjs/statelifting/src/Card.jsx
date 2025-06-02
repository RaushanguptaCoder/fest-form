import React from 'react'

const Card = (props) => {
  return <div>
    <input placeholder='enter your name 'onChange={(e) => {props.setName(e.target.value)}} ></input>
    <p>this is value inside card : {props.name}</p>
  </div>
}

export default Card ;

