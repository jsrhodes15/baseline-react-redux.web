# baseline-react-redux.web

## Intention
This repo is intended to be used as a starting point for Redux Apps presenting with React

Our API is located here - [baseline-sails.api](https://github.com/johnrhampton/baseline-sails.api)

## Demo
> The app is deployed to [Firebase](https://firebase.google.com/) via Codeship

> app.url.here

### Prerequisites
> [Node Version Manager](https://github.com/creationix/nvm)

> Node 4.4.5 (using `nvm install 4.4.5`)

> `nvm alias default 4.4.5`

### Usage
> Run `./start.sh`

> The bash script builds the output into the `build` directory

> Once webpack completes the bundling process: 

>> the web app will open in a browser @ `http://localhost:8080`

>> mocha unit tests will open in a browser @ `http://localhost:8082`

### Changing Environment locally
> Run locally using different configs by setting the `NODE_ENV` (development, qa, production)

> Run `NODE_ENV='development' ./start.sh`

### Continuous Deployment
> CD is handled per branch via Codeship

> For a manual deployment, set the `NODE_ENV`, run npm3 start, and webpack. Output is built in the `dist` directory

> `NODE_ENV='qa' npm3 start`

> `NODE_ENV='qa' webpack --config webpack.deploy.config.js`

### Dev Tools
> https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
