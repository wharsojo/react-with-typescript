# React with Typescript
is a playground / sample webpack configurations

## Setup
* from root folder do these steps:
  * npm i -g typescript webpack
  * npm i
* from each folder (with prefix number), create softlink to node_modules
  * cd 01-simple-webpack
  * ln -s ../node_modules node_modules
  * [continue to other folders...]
* how to run code:
  * cd 01-simple-webpack
    * webpack
  * next folders just type:
    * npm run dev

### Npm packages
* [Webpack - Sass Loader](https://github.com/jtangelder/sass-loader)

### Kill active port - EL Capitan
* netstat -anp tcp | grep 3000
* lsof -i tcp:3000
* kill <PID>
