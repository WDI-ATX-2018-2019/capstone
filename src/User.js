import React from 'react'
import { Card, Grid, Image, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import read from './images/read.png'
import write from './images/write.png'

export default () => (
    <Grid centered columns={1}>
    <Grid.Column>
    <Card.Group>
  <Card>
    <Image src={write} size='medium'/>
    <Card.Content>
      <Card.Header>New Entry</Card.Header>
      <Card.Description>Take a moment to jot down your thoughts, or update your journal with helpful prompts.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        <NavLink to ="/writing">Write Now</NavLink>
      </a>
    </Card.Content>
  </Card>

  <Card>
  <Image src={read} size='medium' />
    <Card.Content>
      <Card.Header>View Entries</Card.Header>
      <Card.Description>Take a look at, edit, or delete previous entries.</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
      <Icon name='user' />
       <NavLink to ="/reading">Read Now</NavLink>
      </a>
    </Card.Content>
  </Card>
</Card.Group>
</Grid.Column>
</Grid>
)