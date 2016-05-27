#!/usr/bin/env bash

##
#
# Refer to README for prerequisites prior to running start script
#
##

# Add a reference to nvm
export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Baseline to Node LTS
nvm install 4.4.5

# Global prerequisites
npm install -g npm3

# Globals for npm3
npm3 install -g webpack webpack-dev-server

# Local NPM install
npm3 install

# run start scripts
npm3 start

# delete build folder
rm -rf ./build/

# Webpack
webpack --config webpack.config.js

# Start the webpack dev server
webpack-dev-server --config webpack.config.js --content-base build/ --inline --hot