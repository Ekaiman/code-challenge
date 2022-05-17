import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'

import aiFetchResponse from './apiCalls'


function App() {
  useEffect(() => {
    aiFetchResponse('unicorns')
  }, [])

  return <div className='App'></div>
}

export default App
