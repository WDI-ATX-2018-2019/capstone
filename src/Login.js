import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

export default () => (
    <Grid centered columns={3}>
    <Grid.Column>
      <Header as="h1" textAlign="center">
        Login
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock" 
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

         <NavLink to ="/user"><Button color="blue" fluid size="large">
            Login
          </Button></NavLink>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);