import React, { Component } from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'
import axios from 'axios'
import TableRow from './tablerow'

export default class Reading extends Component {
    constructor(props) {
        super(props)
        this.state = { entry: [] }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/entry')
            .then(response => {
                this.setState({ entry: response.data })
            })
            .catch(function(error) {
                console.log(error)
            })
    }
    tableRow() {
        return this.state.entry.map(function(object, i) {
            return <TableRow obj={object} key={i} />
        })
    }

    render() {
        return (
            <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Date</Table.HeaderCell>
        <Table.HeaderCell>Entry</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {this.tableRow()}
    </Table.Body>
  </Table>
        )
    }
}