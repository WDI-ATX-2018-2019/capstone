import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

export default () => (
    <Grid centered columns={3}>
    <Grid.Column>
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

          <Button color="blue" fluid size="large">
            Register
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);