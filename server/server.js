const express = require('express')
const cors = require('cors')
const app = express()

const users = {
    'user1':'user 01',
    'user2':'user 02',
    'user3':'user 03',
    'user4':'user 04',
    'user5':'user 05'
} 


app.get("/api", (req, res) => {
    res.json({'users':['user01', 'user02', 'user03']})
})

const PORT = 8080
app.listen(PORT, () => console.log(`Server Started at : http://localhost:${PORT}`))
