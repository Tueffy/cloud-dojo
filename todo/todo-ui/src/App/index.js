import React, { Component } from 'react'
import TodoList from '../TodoList'
import ItemInput from '../ItemInput'
import v4 from 'uuid'
import { Tabs, Tab } from 'material-ui/Tabs'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './styles.css'

injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items || [{ id: v4(), title: 'Write a todo app' }]
    }
  }

  state = {
    items: []
  }

  onAddItem = title => {
    this.setState({
      items: [{ id: v4(), title }, ...this.state.items]
    })
  }

  setDone = ({ id, done }) => {
    this.setState({
      items: this.state.items.map(item => ({
        ...item,
        done: item.id === id ? done : item.done
      }))
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <h1>react todo app</h1>
          </div>
          <div className="todo-list">
            <ItemInput onAddItem={this.onAddItem} />
          </div>
          <div className="todo-list">
            <div className="items">
              <Tabs>
                <Tab label="to do">
                  <TodoList
                    setDone={this.setDone}
                    items={this.state.items.filter(({ done }) => !done)}
                  />
                </Tab>
                <Tab label="done">
                  <TodoList
                    setDone={this.setDone}
                    items={this.state.items.filter(({ done }) => done)}
                  />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
