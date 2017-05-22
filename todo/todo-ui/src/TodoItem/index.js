import React from 'react'
import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

const TodoItem = ({ title, done, onToggle }) => (
  <ListItem
    className="todo-item"
    primaryText={title}
    leftCheckbox={<Checkbox onCheck={onToggle} checked={done} />}
  />
)

export default TodoItem
