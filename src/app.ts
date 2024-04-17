import fastify from 'fastify'
import { AppRoutes } from './env/routes'

export const app = fastify()

app.register(AppRoutes)
