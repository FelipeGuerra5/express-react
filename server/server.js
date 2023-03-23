const express = require('express'), PORT = 8000
const app = express()

const users = [
    {
        id: 1,
        name: 'user_01',
        age: 18
    }, {
        id: 2,
        name: 'user_02',
        age: 28
    }, {
        id: 3,
        name: 'user_03',
        age: 38
    }, {
        id: 4,
        name: 'user_04',
        age: 48
    }
]

app.get("/api/v1", (req, res) => {
    res.send(users)
})

app.listen(PORT, () => console.log(`Server Started at : http://localhost:${PORT}`))
