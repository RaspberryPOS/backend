# Backend

The backend is a Web API service that all other services interact with to function.

## Development

- Install dependencies: `yarn install`
- Create data storage for postgres docker container: `mkdir postgres`
- Start local postgres server: `docker run --name dev-food-truck -p 5432:5432 -v "$PWD"/postgres:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres postgres:14`
  - If docker container already is running: `docker rm dev-food-truck`
- Create `.env` file from `.env.example` and set environement vars
- Run `yarn prisma migrate dev` to setup database schema and do initial data seed
- Run `yarn run dev:server` to start dev web server

### Misc Dev commands

- Run `prisma migrate reset` to reset development database
- Run `yarn prisma studio` to launch Prisma Visual DB viewer

### Prisma DB dev commands

- Run `npx prisma migrate dev --name <name>` if a change to schema has been done and it neesd to be captured for a migration
