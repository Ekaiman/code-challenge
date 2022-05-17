import React from 'react'
import { useState } from 'react'

function Form(props) {
  const [prompt, setPrompt] = useState('')

  const submitPrompt = event => {
    event.preventDefault()
  
    props.addPrompt(prompt)
    clearInputs()
  }

  const clearInputs = () => {
    setPrompt('')
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Prompt'
        name='prompt'
        value={prompt}
        onChange={event => {
          setPrompt(event.target.value)
          
        }}
      />

      <button onClick={submitPrompt}>SUBMIT</button>
    </form>
  )
}

export default Form
