import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Menu from './Menu'
import Login from './Login'
import User from './User'
import Writing from './Writing'
import Reading from './Reading'
import Register from './Register'

const App = () => (
    <BrowserRouter>
  <Fragment>
    <Menu />	
    <Container>    
      <Switch>
      	<Route path ="/user" component ={User}/>
        <Route path ="/login" component={Login}/>
        <Route path ="/register" component={Register} />
        <Route path ="/writing" component={Writing} />
        <Route path ="/reading" component={Reading} />
      </Switch>
    </Container>
  </Fragment>
  </BrowserRouter>
);

export default App;