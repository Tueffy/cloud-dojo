import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class TodoItem extends Component {
  state = {
    title: ''
  }

  onChange = (e, value) => {
    this.setState({ title: value })
  }

  onSubmit = () => {
    this.props.onAddItem(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <div>
        <TextField
          hintText="What do you need to do?"
          value={this.state.title}
          onChange={this.onChange}
        />
        <RaisedButton
          className="add-button"
          label="Add"
          primary
          onTouchTap={this.onSubmit}
        />
      </div>
    )
  }
}

export default TodoItem
