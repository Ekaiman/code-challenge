import React from "react";
import './Card.css'

const Card = ({response, prompt, id}) => { 

  return (
    <div className='card'>
      <h2 className='card-text'>Your idea: {prompt} </h2>
      <h2 className='card-text'>Your commercial: {response}</h2>
    </div>
  )
}


export default Card