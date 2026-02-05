import express from 'express'
import cors from 'cors'
import { db } from './db.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/eventos', async (req, res) => {
  const eventos = await db.all('SELECT * FROM eventos')
  res.json(eventos)
})

app.post('/comprar', async (req, res) => {
  const { usuario_id, evento_id } = req.body

  await db.run(
    'INSERT INTO ingressos (usuario_id, evento_id, data_compra) VALUES (?, ?, datetime(\"now\"))',
    [usuario_id, evento_id]
  )

  res.send('Ingresso comprado com sucesso!')
})

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000')
})
