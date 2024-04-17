import { FastifyInstance } from 'fastify'

export async function AppRoutes(app: FastifyInstance) {
  app.get('/', (req, res) => {
    return res.send({ message: 'OK' })
  })
}
