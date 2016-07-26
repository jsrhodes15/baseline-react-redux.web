# baseline-react-redux.web

#### add codeship badge

## Intention
This repo is intended to be used as a guideline for Redux apps presenting with React

Our API is located here - [baseline-sails.api](https://github.com/johnrhampton/baseline-sails.api)

## Features
- [react-router-redux](https://github.com/reactjs/react-router-redux)

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
npm install -g npm3
```

### Usage
Install local dependencies, bundle the app via webpack, and fire up the webpack-dev-server @ `http://localhost:8080`
```
npm run dev
```

Build dev output in the `build` directory
```
npm run build
```

### Testing ** NOT IMPLEMENTED YET
Bundle mocha unit tests and fire up webpack-dev-server @ `http://localhost:8082`
```
npm test
```

### Deployment
Continuous Deployment is handled per branch via Codeship.  Output is built in the `dist` directory.

```
npm run dist
```

### Dev Tools
https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
