
// Forma convencional

// const element = document.createElement('h1')
// element.innerText = 'Hello word!!!'
// const container = document.getElementById('root')
// container.appendChild(element)

// la forma de react

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello word!!! with react</h1>
const container = document.getElementById('root')
ReactDOM.render(element, container)