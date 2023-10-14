# xfarr-api

Full API Implementation inside NodeJS Module

More info at https://api.xfarr.com/
Get **ApiKEY** here https://api.xfarr.com/auth/signin

And you can upgrade your apikey to premium or VIP, you can see more details at https://api.xfarr.com/pricing
## Installation
npm:
```bash
$ npm install xfarr-api
```
yarn:
```bash
$ yarn add xfarr-api
```

## Simple to Use
## CommonJs (CJS) syntax
```js
const APIWrapper = require('xfarr-api');
```
## ECMAScript Modules (ESM) syntax
```ts
import APIWrapper from 'xfarr-api';
```
## Example
```js
const xfar = new APIWrapper('ApiKEY');

// How to call the API
xfar.[feature].[name](parameter)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error.message);
  });

// Example of an API call
xfar.stalking.npmjs("xfarr-api")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error.message);
  });
```

# Thanks To
<a href="http://github.com/DikaArdnt"><img src="http://github.com/DikaArdnt.png?size=100" width="100" height="100"></a> | [![Lui](http://github.com/luiii24.png?size=100)](http://github.com/luiii24)
----|----
[Dika Ardianta](http://github.com/DikaArdnt) | [Lui](http://github.com/hexagonz)
Pedo | Jomok

# Feedback
If you have any feedback, please reach out to us at xfar.dev@gmail.com