import setupMiddlewares from '@/main/config/middlewares'
import setupSwagger from '@/main/config/swagger'
import { setupRoutes } from '@/main/config/routes'
import express from 'express'
// import keycloak from './keycloak'

const app = express()
// app.use(
//   keycloak.middleware({
//     logout: '/logout',
//     admin: '/'
//   })
// )
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export { app }
