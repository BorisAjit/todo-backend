import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { routes } from './routes/todoRoutes'

const app = express()
const PORT = 4000

//mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://0.0.0.0:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//body parser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

routes(app)

app.listen(PORT, ()=>{
  console.log(`Application is listening on port ${PORT}`)
})
