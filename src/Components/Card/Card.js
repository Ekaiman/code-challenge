import React from 'react'
import './Card.css'

const Card = ({ response, prompt, deletePrompt, id }) => {
  return (
    <div className='card'>
      <div className='button-holder'>
        <button
          onClick={() => {
            deletePrompt(id)
          }}
          id='close'
        >
          close
        </button>
      </div>
      <h2 className='card-text'>Your idea: {prompt} </h2>
      <h2 className='card-text'>Your commercial: {response}</h2>
    </div>
  )
}

export default Card
