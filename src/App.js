import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoTaskList from './ToDoTaskList';
import ToDoTasks from './ToDoTasks';

import './App.css';

class App extends Component {
  // Constructor function
    constructor(){
      super()
      this.state = {
        tasks : [],
        currentTask : {text : '', key : ''},
      }
    }
  // End function

  // Function for input
    handleInputValue = e => {
      // console.log('Hello React')
      const TaskText = e.target.value
      const currentTask = { text : TaskText , key : Date.now() }
      this.setState ({
        currentTask,
      })
    }
  // End function

  // Function to add new task to list
    addTask = (e) => {
      e.preventDefault()
      const newTask = this.state.currentTask
      if(newTask.text !== '')
      {
        const tasks = [...this.state.tasks, newTask]
        this.setState ({
          tasks : tasks,
          currentTask : {text : '' , key : ''},
        })
      }
    }
  // End function

  // Function to delete tasks from list
    deleteTask = key =>{
      const filteredTasks = this.state.tasks.filter(task =>{
        return task.key !== key
      })
      this.setState({
        tasks : filteredTasks,
      })
    }
  // End function

  // Function to checked tasks in the LIST
  checkedTask = key =>{
    const DoneTasks = this.state.tasks.find(function (task){
      return task.key === key ? task.taskState = "completed" : task.taskState = ''
    })
    this.setState({
      taskEntries : DoneTasks
    })
  }
  // End function
  render() {
    return (
      <div className="App">
        <ToDoTaskList
                addTask={this.addTask}
                handleInputValue={this.handleInputValue}
                currentTask={this.state.currentTask}
        />
        <ToDoTasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          checkedTask={this.checkedTask}
        />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
