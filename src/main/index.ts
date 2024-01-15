import './config/module-alias'
import { PgConnection } from '@/infra/repos/postgres/helpers'
import 'reflect-metadata'
import { env } from '@/main/config/env'
import { API, SWAGGER } from '@/utils/constants'

PgConnection.getInstance()
  .connect()
  .initialize()
  .then(async () => {
    const { app } = await import('@/main/config/app')

    app.listen(env.port, () => {
      console.log(`Server running at http://localhost:${env.port}${API}`)
      console.log(`Swagger at http://localhost:${env.port}${API}${SWAGGER}`)
    })
  })
  .catch(console.error)
