# Blog App

## Create application

```bash
npx create-react-app blog-app
```

## Git Config

```bash
git config --global user.email "angelito@angelito.com.br"
git config --global user.name "Angelito Casagrande"
```

## Preparação dos arquivos

1. Excluir arquivos da pasta source/
2. Criar estrutura de pastas
```bash
src/
    assets/
        css/
        js/
    blog/
        actions/
        components/
        containers/
        pages/
        reducers/
    main/
```

## Criar arquivos iniciais

> Imagem do webpack

@ src/assets/css/bootstrap.scss
```css
@import 'node_modules/bootstrap/scss/bootstrap'
```

@ src/assets/js/bootstrap.js
```js
@import 'bootstrap'
```

@ src/index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './main/App';
import './assets/css/bootstrap.scss'

ReactDOM.render(
    <App title="My Blog" />
    , document.getElementById('root'));
```

@ src/main/App.jsx
```js
import React from 'react'

const App = (props) => (
    <div className="container">
        <h1>{props.title}</h1>
        <hr />
    </div>
)

export default App
```

## Instalação Bootstrap para UI

```bash
npm i -D bootstrap
npm i -D jquery popper.js
npm i -D node-sass
```

## Instalação do Router e Redux

```bash
npm i -D react-router-dom react-redux redux
```

## Instalação axios e promise

npm i -D axios redux-promise