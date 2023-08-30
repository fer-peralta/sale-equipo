import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Bienvendio a Sale Equipo!' })
})

router.get('/*', (req, res) => {
  console.log(`La ruta no existe`)
  res.status(404).sendFile('404.html', { root: 'src/routes/error' })
})

export { router as apiRouter }
