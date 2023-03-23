import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const urlWithProxy = "/api/v1"

  useEffect(() => {
    axios
      .get(urlWithProxy)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>All Users: </h1>
      <div className='App'>

        {
          users.map(user => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.age}</p>
            </div>
          ))
        }

      </div>
    </>

  )
}

export default App
