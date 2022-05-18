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

  return (
    <main className='App'>
      <h1>Write a commerical!</h1>
      <Form addPrompt={addPrompt} />
      <CardHolder responses={responses}/>
    </main>
  )
}

export default App

