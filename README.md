### Voting App with Apiary

[![Build Status](https://travis-ci.org/dankreiger/voting-app.svg?branch=master)](https://travis-ci.org/dankreiger/voting-app)

### [Live Demo](https://voting-app-123.surge.sh)

---

### Prerequisites

**Node**

1. Node 10.0.0 or later

   - You can use [nvm](https://github.com/creationix/nvm#installation) to manage your node version
   - if you have NVM installed, you can switch to the default project node version 10.16.0:

   ```sh
   $ nvm install 10.16.0
   $ nvm use
   ```

2. Yarn (preferable) or NPM

3. Chrome or another modern browser

---

### Getting Started

1. Clone the repo and `cd` into project root

   ```sh
   $ git clone git@github.com:dankreiger/voting-app.git
   $ cd voting-app
   ```

2. Install dependencies with [yarn](https://yarnpkg.com/en/) (you can also use `npm`)

   ```sh
   $ yarn
   ```

3) Start server

   ```sh
   $ yarn start
   ```

4) Browser will open automatically on http://localhost:3000/

---

### Running Tests

```sh
$ yarn test
```

This project uses [Jest Snapshots](https://jestjs.io/docs/en/snapshot-testing), so you may have to update them as well when changing components.

You can do this by pressing `u` during watch mode, or run `yarn test --updateSnapshot`
