
// Forma convencional

// const element = document.createElement('h1')
// element.innerText = 'Hello word!!!'
// const container = document.getElementById('root')
// container.appendChild(element)

// la forma de react

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello word!!! with react wooh <br /></h1>
const container = document.getElementById('root')
// ReactDOM.render(__que__, __donde__)
// ReactDOM.render(element, container)

// crear element con React.createElement
const data = 'http://platzi.com'
const elemento = React.createElement('a', { href: data }, 'Ir a platzi')
const data1 = 'Mary'
const jsx = React.createElement('h1', {}, `Hola ${data1}`)
const jsx1 = (
<div>
    <h1>Hola soy ingeniero</h1>
    <p>En el sector de desarrollo</p>
</div>
)
const elemento1 = React.createElement('div',
{},
React.createElement('h1', {}, 'Buenas soy un h1'),
React.createElement('p', {}, 'Hola soy un parrafo'))
ReactDOM.render(elemento1, container)