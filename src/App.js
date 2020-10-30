import React from 'react'
import { Provider } from 'react-redux'
import { Normalize } from 'styled-normalize'
import store from './store'
import PageTemplates from './templates/PageTemplates'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Normalize />
        <PageTemplates />
      </div>
    </Provider>
  )
}

export default App
