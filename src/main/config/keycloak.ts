import KeycloakConnect from 'keycloak-connect'
import session from 'express-session'
import { env } from '@/main/config/env'

export const memoryStore = new session.MemoryStore()

const config = {
  realm: env.keycloak_realm_name,
  'auth-server-url': env.keycloak_baseurl,
  resource: 'master-realm',
  'confidential-port': 0,
  'ssl-required': 'external'
}

const keycloak = new KeycloakConnect({ store: memoryStore }, config)

export default keycloak
