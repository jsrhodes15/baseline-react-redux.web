# baseline-react-redux.web

#### add codeship badge

## Intention
This repo is intended to be used as a guideline for Redux apps presenting with React

Our API is located here - [baseline-sails.api](https://github.com/johnrhampton/baseline-sails.api)

## Features
- Hot Module Replacement - JS and CSS
- ES6 modules bundled with Webpack and Babel (following [create-react-app](https://github.com/facebookincubator/create-react-app) patterns)
- Simple Authentication using JWT
- [redux](https://github.com/reactjs/redux)
- [redux-devtools](https://github.com/gaearon/redux-devtools)
- [react-router-redux](https://github.com/reactjs/react-router-redux)
- [react-router](https://github.com/reactjs/react-router)
- [js-snackbar](https://github.com/johnrhampton/SnackBar)
- [Material Design Lite](https://getmdl.io/)

## Demo
The app is deployed to [Firebase](https://firebase.google.com/) via Codeship

#### coming soon

### Prerequisites

#### NVM
- [Node Version Manager](https://github.com/creationix/nvm) and Node 6.9.1
```
nvm install 6.9.1
nvm alias default 6.9.1
```

### Usage
Install local dependencies, bundle the app via webpack, and fire up the webpack-dev-server @ `http://localhost:8080`
```
npm install

npm start
```

Build dev output in the `build` directory
```
npm run build:dev
```

### Testing ** NOT IMPLEMENTED YET
Bundle mocha unit tests and fire up webpack-dev-server @ `http://localhost:8082`
```
npm test
```

### Deployment
Continuous Deployment is handled per branch via Codeship.  Output is built in the `dist` directory.

```
npm run build:prod
```

### Dev Tools
https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
