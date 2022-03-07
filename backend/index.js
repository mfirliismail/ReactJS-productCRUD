const express = require('express')
const app = express()
const port = 5000 
const productRouter = require('./routes/produk')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', productRouter)

app.get('/test', (req, res) => {
    return res.status(200).json({
        status: 'server running'
    })
})

app.listen(port, () => {
    console.log(`listening on server port ${port}...`)
})