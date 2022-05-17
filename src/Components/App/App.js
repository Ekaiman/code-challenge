import './App.css'
import { useEffect, useState } from 'react'
import aiFetchResponse from '../../apiCalls'
import Form from '../Form/Form'

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
    </main>
  )
}

export default App

