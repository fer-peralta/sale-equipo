import express from 'express'
import { config } from './config/config.js'
import { apiRouter } from './v1/routes/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)

const PORT = config.PORT

const server = app.listen(PORT, () => {
  console.log(
    `Servidor corriendo en el proceso ${process.pid} y escuchando en puerto ${PORT}`
  )
})

server.on('error', error =>
  logError.error({
    message: 'There was an error running the server',
    error: error
  })
)
