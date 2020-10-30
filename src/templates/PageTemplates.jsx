import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ListPage from '../pages/ListPage'

const PageTemplates = () => {
  return (
    <Router>
      <header>
        <h1>Angular / Angular-cli</h1>
      </header>
      <Switch>
        <Route path="/">
          <ListPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default PageTemplates
