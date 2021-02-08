## Instrucciones para usar Webpack

### Instalaciones

- webpack
- webpack-cli
- webpack-dev-server

### Loaders

- babel-loader
- @babel/core
- @babel/preset-env
- html-loader
- css-loader
- file-loader
- image-webpack-loader

### Plugins

- html-webpack-plugin
- mini-css-extract-plugin

### Comandos

Comandos cli en package.json

- _build_ : webpack --mode production
- _dev_ : webpack --mode development
- _build-foo_ : webpack --mode production --entry _path entry_ -o _path output_
- _dev-foo_ : webpack --mode development --entry _path entry_ -o _path output_
- _start_ : webpack serve --mode development --open --port 3000
