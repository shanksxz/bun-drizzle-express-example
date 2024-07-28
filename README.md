## bun-drizzle-express-example

This is an example of how to use the bun-drizzle-express package to create a simple express server.

### Development

1. Clone the repository
```bash
git clone https://github.com/shanksxz/bun-drizzle-express-example.git
```
2. Install the dependencies
```bash
bun install
```
3. Start a docker container with a postgres database
```bash
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```
4. Create a .env file with the following content
```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres?schema=public
```
5. You can add more tables to the schema in ```src/db/schema/index.ts``` or you can create seprate file for each table in the ```src/db/schema``` directory. 


6. Generate the migrations
```bash
bun run generate
```

7. Run the migrations
```bash
bun run migrate
```

8. Start the server
```bash
bun run dev
```

