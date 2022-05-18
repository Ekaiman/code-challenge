import React from 'react'
import Card from '../Card/Card'
import './CardHolder.css'

const CardHolder = ({ responses, deletePrompt }) => {
  const cards = responses.map(response => {
    return (
      <Card
        response={response.resp}
        prompt={response.prom}
        id={response.id}
        key={response.id}
        deletePrompt={deletePrompt}
      />
    )
  })

  return <div className='card-holder'>{cards}</div>
}

export default CardHolder
