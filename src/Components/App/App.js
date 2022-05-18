import './App.css'
import { useState } from 'react'
import aiFetchResponse from '../../apiCalls'
import Form from '../Form/Form'
import CardHolder from '../CardHolder/CardHolder'

function App() {
  const [responses, setResponses] = useState([])
  const [err, setErr] = useState()

  const addPrompt = prompt => {
    aiFetchResponse(prompt)
      .then(data => {
        const newResponse = {
          resp: data.choices[0].text,
          prom: prompt,
          id: data.id
        }
        setResponses([newResponse, ...responses])
      })
      .catch(error => {
        setErr('Something bad happened. ' + error + '. Please try again later!')
      })
  }

  const deletePrompt = id => {
    const filteredResponses = responses.filter(response => response.id !== id)
    setResponses(filteredResponses)
  }

  return (
    <main className='App'>
      <h1>Write a commerical!</h1>
      {err && <h1>{err}</h1>}
      {!err && <div>
        
      {responses.length === 0 && (
        <h2>
          Have an idea and need a commercial? Enter a prompt an recieve a
          commercial!
        </h2>
      )}
      {responses.length > 0 && (
        <h2>
          Continue entering prompts and recieving commercial ideas!
        </h2>
      )}
      <Form addPrompt={addPrompt} />
      <CardHolder responses={responses} deletePrompt={deletePrompt} />
      </div>}
    </main>
  )
}

export default App

