import './App.css'
import { useEffect, useState } from 'react'
import aiFetchResponse from '../../apiCalls'
import Form from '../Form/Form'
import CardHolder from '../CardHolder/CardHolder'

function App() {
  const [responses, setResponses] = useState([])

  const addPrompt = prompt => {
    aiFetchResponse(prompt).then(data => {
      console.log(data)
      const newResponse = {
        resp: data.choices[0].text,
        prom: prompt,
        id: data.id
      }
      setResponses([...responses, newResponse])
    })
  }

  const deletePrompt = id => {
    const filteredResponses = responses.filter(response => response.id !== id)
    setResponses(filteredResponses)
  }

  return (
    <main className='App'>
      <h1>Write a commerical!</h1>
      {responses.length === 0 && <h2>Have an idea and need a commercial? Enter a prompt an recieve a commercial!</h2>}
      <Form addPrompt={addPrompt} />
      <CardHolder responses={responses} deletePrompt={deletePrompt}/>
    </main>
  )
}

export default App

