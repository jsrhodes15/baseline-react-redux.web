# baseline-react-redux.web

#### add codeship badge

## Intention
This repo is intended to be used as a guideline for Redux apps presenting with React

Our API is located here - [baseline-sails.api](https://github.com/johnrhampton/baseline-sails.api)

## Features
- [react-router-redux](https://github.com/reactjs/react-router-redux)
- [react-native-storage](https://github.com/sunnylqm/react-native-storage)

## Demo
The app is deployed to [Firebase](https://firebase.google.com/) via Codeship

app.url.here

### Prerequisites

#### NVM
- [Node Version Manager](https://github.com/creationix/nvm) and Node 4.4.7
```
nvm install 4.4.7
nvm alias default 4.4.7
```

#### Global Dependencies
```
npm install -g npm3 webpack webpack-dev-server
```

### Usage
Install local dependencies, bundle the app via webpack, and fire up the webpack-dev-server @ `http://localhost:8080`
```
npm3 run dev
```

Build local output in the `build` directory
```
webpack --config webpack.config.js
```

### Testing
Build test output in the `unit-tests` directory
```
webpack --config webpack.test.config.js
```

Bundle mocha unit tests and fire up webpack-dev-server @ `http://localhost:8082`
```
webpack-dev-server --config webpack.test.config.js  --content-base unit-tests/ --inline
```

### Change local environment
Run locally using different env configs by setting the `NODE_ENV` (development, qa, production)

```
NODE_ENV='development' npm3 start
```

### Deployment
Continuous Deployment is handled per branch via Codeship. Environments can be changed by setting `NODE_ENV`.

Output is built in the `dist` directory.

```
NODE_ENV='qa' npm3 install && npm3 start && webpack --config webpack.deploy.config.js
```

### Dev Tools
https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
