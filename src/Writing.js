import React from 'react'
import { Form, Input, TextArea, Button, Select, Card } from 'semantic-ui-react'

const Entry = () => (
    <Form>
    <Form.Group widths='small'>
      <Form.Field
        id='Date'
        color='blue'
        control={Input}
        label='Date'
        placeholder='Date'
      />
      
  <Card.Group>
    <Card small header='What was something out of the ordinary that happened today?' />
    <Card small header='Who did you spend time with today?' />
    <Card small header='How many meals did you prepare for yourself today?' />
  </Card.Group>
      
    </Form.Group>
      <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Entry'
      placeholder="What's on your mind?"
      />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Submit'
    />
  </Form>
)

export default Entry