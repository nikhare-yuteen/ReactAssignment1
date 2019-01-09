import React, {Component} from 'react'

class ToDoTasks extends Component{
  setTasks = task => {
    const {checkedTask,deleteTask} = this.props
    return (
      <li className={task.taskState} onClick={() => checkedTask(task.key)}>
        <span>{task.text}</span>
        <span className="close" onClick={ () => deleteTask(task.key)}>X</span>
      </li>
    )
  }
  render(){
    const {tasks} = this.props
    const listTask = tasks.map(this.setTasks)
    return <ul className='taskList'>{listTask} </ul>
  }
}
export default ToDoTasks
