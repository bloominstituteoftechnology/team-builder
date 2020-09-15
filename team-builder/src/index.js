import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:


render(
  <>
   {/* <SimpleForm /> */}
    <App /> 
  </>
  , document.querySelector('#root')
)
