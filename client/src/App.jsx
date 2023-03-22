import { useState, useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    fetch('/api').then(
      response => {return response.json()}
    ).then(data => console.log(data)
    ).catch((err) => {console.log(err)})
  })

  return (
    <h1>Hello</h1>
  )
}

export default App
