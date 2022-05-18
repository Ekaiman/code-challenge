import React from "react";
import Card from '../Card/Card'
import './CardHolder.css'

const CardHolder = ({responses}) => { 
  const cards = responses.map(response => {
   return <Card
      response={response.resp}
      prompt={response.prom}
      id={response.id}
      key={response.id}
    />
  })

  const reversed = cards.reverse()
  return (
    <div className="card-holder">
      {reversed}
    </div>
  )
}

export default CardHolder