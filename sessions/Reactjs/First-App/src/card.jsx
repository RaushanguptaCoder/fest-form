import React from "react";

const Card = ({ name,location, age})=>{
    return (
        <>
        <h1 className="text-3xl">Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h4>Age: {age}</h4>
        </>
    );
}

export default Card;