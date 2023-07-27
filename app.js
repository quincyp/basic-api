const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

let data = [
    'The Avengers',
    'All Dogs Go to Heaven',
    'The Aristocats',
    'The Brave Little Toaster',
    'The Lord of the Rings',
    'The Revenant',
    'Cats & Dogs',
]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Test!')
})

app.get('/all', (req, res) => {
    res.json(data)
})

app.get('/find', (req, res) => {
    let text
    let filtered
    if(req.query.contains !== undefined)    {
        text = req.query.contains
        filtered = data.filter(title => title.toLowerCase().includes(text))
    } else if(req.query.startsWith !== undefined) {
        text = req.query.startsWith
        filtered = data.filter(title => title.toLowerCase().startsWith(text))
    }
    res.json(filtered)
})


app.delete('/all', (req, res) => {
    data = [];
    res.json(data)
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})