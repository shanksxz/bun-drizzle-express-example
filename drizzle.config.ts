import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema : "src/db/schema/**",
    dialect : "postgresql",
    dbCredentials : {
        url : "postgres://postgres:xnve4729@localhost:5432/postgres?schema=public"
    },
    out : "./drizzle",
})