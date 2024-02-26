# GraphQL Blog App:

## requirement

- user can post and publish blog content
- user can see post
- authentication system
- user can see their own profile

## Table

- post

  - id
  - title
  - content
  - authorId
  - createdAt
  - updatedAt
  - published

- user

  - id
  - name
  - email
  - password
  - createAt
  - updateAt
  - profile

- profile
  - id
  - bio
  - createAt
  - updateAt
  - userId

## Technology Stack:

- graphql
- typescript
- postgresql
- prisma

---

---

---

# Start From Zero: 
[all video's instruction here ](https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-68-2-initializing-the-project-with-apollo-server)


- yarn init -y
- https://www.apollographql.com/docs/apollo-server/getting-started (This only for new and basic project which provided all GraphQL default Setup, But have some issue for tsc or TypeScript and nodemon configuration, So if we want to manual setup by self follow the bellow link:- of step-2-install-dependencies )
- https://www.apollographql.com/docs/apollo-server/getting-started#step-2-install-dependencies
  - yarn add @apollo/server graphql
  - yarn add typescript
  - yarn add @types/node
  - yarn add ts-node-dev
  - yarn add -D nodemon
- create src folder in root -> and create index.ts in to src folder -> write some code for Gpl
  - Example Code: `const checkGql: string = "Text check for GraphQL";  console.log(checkGql);`
  - npx ts-node-dev src/index.ts (type in terminal)
- Now edit package json file `"scripts":{ "dev": "nodemon --watch './**/*.ts' --exec ts-node src/index.ts " },` type this code before dependencies
- Finally Type `yarn dev` in terminal

--- now finish basic setup ---

- now start GpQL code setup in to src/index.ts from website: https://www.apollographql.com/docs/apollo-server/getting-started#step-3-define-your-graphql-schema

















