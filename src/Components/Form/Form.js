import React from 'react'
import { useState } from 'react'

function Form(props) {
  const [prompt, setPrompt] = useState('')

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

      <button >SUBMIT</button>
    </form>
  )
}

export default Form
