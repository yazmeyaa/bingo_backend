import express from 'express'
import cors from 'cors'
import { appConfig } from 'config/dotenv'
import getBingoById from 'routes/getBingoById'
import createNewBingo from 'routes/createNewBingo'
const app = express()

const PORT = appConfig.express.port

app.use(cors())
app.use(express.json())

app.get('/bingo', getBingoById)
app.post('/create', createNewBingo)

app.listen(PORT, () => {
    console.log('Server started at port: ', PORT)
})