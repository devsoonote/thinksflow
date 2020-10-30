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
    <div>
      <Router>
        <Header>
          <Title>Angular / Angular-cli</Title>
        </Header>
        <Switch>
          <Route path="/">
            <ListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 1.2rem;
`

export default PageTemplates
