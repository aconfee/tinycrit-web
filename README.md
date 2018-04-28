[![CircleCI](https://circleci.com/gh/aconfee/tinycrit-web.svg?style=svg)](https://circleci.com/gh/aconfee/tinycrit-web)

# TinyCrit
###### tinycrit.com

### Description
Super secret.

### Setup

Assuming you're starting from scratch, here's how to set everything up for development. 
1. Clone and download this repo. 
2. Run `npm install` to download dependencies.
3. Happy developing! 

### Stack
* React (generated from create-react-app https://github.com/facebook/create-react-app)

### Environment and Workflow
* `npm start` to start running on port 3000.
* `npm test` to run all unit tests.
* .vscode/launch.json included with VS Code defaults.
* Currently there's no branching strategy and only one environment -- the production environment. Just develop on master and deploy to prod. 

### Build
* `npm run build` to build and output to ./build

### Deploy

Simply push to, or merge a commit to the master branch. 

This repo is being watched by CircleCI https://circleci.com/gh/aconfee/tinycrit-web. It will be deployed to the tinycrit.com S3 bucket and live on www.tinycrit.com. 

### Architecture
* Served from S3 and Cloudfront
* Routed through Route 53
* Domain in Google Domains
* This repo is the view only. No backend, server, api, etc. are here.   