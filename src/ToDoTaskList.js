import React, { Component } from 'react';

class ToDoTaskList extends Component {
  render(){
    const {addTask,currentTask,handleInputValue} = this.props
    return(
      <div className="taskListMain">
        <div className="header">
          <form onSubmit={addTask}>
            <h1>TODO LIST</h1>
            <input
              placeholder="Add Task"
              value = {currentTask.text}
              onChange = {handleInputValue}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
export default ToDoTaskList
