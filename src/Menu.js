import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

export default () => (
    <Menu>
    <Container>
      <Menu.Item as="a" name="Journaltastic">
        Journaltastic
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as="a" name="login">
          <NavLink to="/Login">Login</NavLink>
        </Menu.Item>

        <Menu.Item as="a" name="register">
          <NavLink to="/Register">Register</NavLink>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);