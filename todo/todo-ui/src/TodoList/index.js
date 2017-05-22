import React from 'react'
import { List } from 'material-ui/List'
import TodoItem from '../TodoItem'

const TodoList = ({ items = [], title = 'To do', setDone }) => (
  <div>
    <List>
      {items.map(item => (
        <TodoItem
          key={item.id}
          {...item}
          onToggle={(e, checked) => {
            setDone({ id: item.id, done: checked })
          }}
        />
      ))}
    </List>
  </div>
)

export default TodoList
