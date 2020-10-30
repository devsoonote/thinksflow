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
    <Wrapper>
      <Router>
        <Content>
          <Header>
            <Title>Angular / Angular-cli</Title>
          </Header>
          <Switch>
            <Route path="/">
              <ListPage />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #ddd;
  min-height: 100vh;
`

const Content = styled.div`
  background-color: #fff;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`

const Title = styled.h1`
  font-size: 1.2rem;
`

export default PageTemplates
