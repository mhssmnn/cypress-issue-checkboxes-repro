# README

This repository is a reproduction for this issue over at Cypress side:
https://github.com/cypress-io/cypress/issues/

To reproduce this issue we select all checked checkboxes and uncheck them.

## Setup steps

Install npm dependencies: `npm install`

### Running Cypress itself

Run the server in one terminal:

```
npm run cypress:server
```

Run the Cypress app in another terminal:

```
npm run cypress:open
```

You can also run the spec directly without Cypress GUI:

```
npm run cypress:run
```
