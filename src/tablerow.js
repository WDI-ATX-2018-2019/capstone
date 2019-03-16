import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component {
	constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
        	flipSwitch: false
        }
    }
    delete() {
        axios.get('http://localhost:4000/entry/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(error => console.log(error))
            this.setState({flipSwitch: true})
}

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.date}
          </td>
          <td>
            {this.props.obj.entry}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}
