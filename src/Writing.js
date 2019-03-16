import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select, Card } from 'semantic-ui-react'
import axios from 'axios'

export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.onChangedate = this.onChangedate.bind(this)
        this.onChangeentry = this.onChangeentry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            date: '',
            entry: ''
        }
    }

    onChangedate (event) {
        this.setState({
            date: event.target.value
        })
        
    }

    onChangeentry(event) {
        this.setState({
            entry: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const object = {
          date: this.state.date,
          entry: this.state.entry
        }
        console.log(object)
        axios.post('http://localhost:4000/entry/add', object)
          .then(response => console.log(response.data))
          .catch(error => console.log(error))

        
        this.setState({
            date: '',
            entry: ''
        })
    }


    render() {
        return (
            <Form onSubmit = {this.onSubmit}>
    <Form.Group widths='small'>
      <Form.Field
        id='date'
        color='blue'
        control={Input}
        label='date'
        placeholder='date'
        value = {this.state.date}
        onChange = {this.onChangedate}
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
      label='entry'
      placeholder="What's on your mind?"
      value = {this.state.entry}
      onChange = {this.onChangeentry}
      style ={{minHeight: 250}}
      />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Submit'
      
    />
  </Form>
        )
    }
}