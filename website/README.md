This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Working with the Tests

We're using [Jest](https://jestjs.io/) as our basic test runner. To run the tests from the command line,
use:

```bash
yarn test
```

To run the tests with Jest in a watched mode with notifications as appropriate for a TDD workflow, use:

```bash
yarn tdd
```

In general, place any unit test scripts in the folder structure close to the code being tested. Use the
common `*.spec/test.ts/js` naming convention. Place any kind of end to end or integration tests in the `/tests` folder.


For React components, we're using [react-testing-library](https://testing-library.com/docs/react-testing-library/intro).
Please try to avoid making these tests depend on implementation details.



## Working with the Local Database

The local development and testing database is Postgresql running in a Docker container
as defined in the local `docker-compose.yaml` file.

To start up the container, run this:

```bash
yarn db:init
#or
docker-compose up -d
``` 

To tear down the container, use:

```bash
yarn db:teardown
#or
docker-compose down
```

## typeorm migrations

We're using [typeorm](https://typeorm.io/#/) for data access and its built in [migrations](https://typeorm.io/#/migrations) support for managing the database
structure.

To use any command from the [typeorm cli](https://typeorm.io/#/using-cli), use this:

```bash
yarn typeorm:local [arguments]
```

For convenience, we have:

* `yarn db:migrate` -- runs the migrations
* `yarn db:sync` -- runs the typeorm database synchronization
* `yarn g:entity [entity name]` -- generate a new typeorm entity file
* `yarn g:migration [migration name]` -- generate a new typeorm migration with the given name



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
