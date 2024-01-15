export const env = {
  port: process.env.PORT ?? 3000,
  jwtSecret: process.env.JWT_SECRET ?? 'jk43h5jk43h5k34',
  postgres_host: process.env.POSTGRES_HOST ?? 'localhost',
  postgres_port: process.env.POSTGRES_PORT ?? 5432,
  postgres_username: process.env.POSTGRES_USERNAME ?? 'postgres',
  postgres_password: process.env.POSTGRES_PASSWORD ?? 'postgres',
  postgres_database: process.env.POSTGRES_DATABASE ?? 'skepfy',
  postgres_synchronize: handleBoolean(process.env.POSTGRES_SYNCHRONIZE),
  postgres_logging: handleBoolean(process.env.POSTGRES_LOGGING),
  keycloak_baseurl: process.env.KEYCLOAK_BASEURL ?? 'http://localhost:8080',
  keycloak_realm_name: process.env.KEYCLOAK_REALM_NAME ?? 'master',
  keycloak_username: process.env.KEYCLOAK_USERNAME ?? 'admin',
  keycloak_password: process.env.KEYCLOAK_PASSWORD ?? 'admin',
  keycloak_granttype: process.env.KEYCLOAK_GRANTTYPE ?? 'password',
  keycloak_clientid: process.env.KEYCLOAK_CLIENTID ?? 'admin-cli',
  keycloak_totp: process.env.KEYCLOAK_TOTP ?? '123456',
  email_auth: handleBoolean(process.env.EMAIL_AUTH),
  email_from: process.env.EMAIL_FROM ?? 'aquaapiamail@gmail.com',
  email_fromDisplayName: process.env.EMAIL_FROMDISPLAYNAME ?? 'Aquaapia',
  email_host: process.env.EMAIL_HOST ?? 'smtp.gmail.com',
  email_port: process.env.EMAIL_PORT ?? 465,
  email_ssl: handleBoolean(process.env.EMAIL_SSL),
  email_starttls: handleBoolean(process.env.EMAIL_STARTTLS),
  email_user: process.env.EMAIL_USER ?? 'aquaapiamail@gmail.com',
  email_password: process.env.EMAIL_PASSWORD ?? 'wjzajhygkdzpqoff'
}

function handleBoolean(
  env_variable: string | undefined,
  default_value: boolean = true
): boolean {
  if (!env_variable) {
    return default_value
  } else {
    return env_variable === 'true'
  }
}
