import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import { addTask, deleteTask, completeTask, changeFilter } from '../../actions/actionCreator';

import { COMPLETED, ACTIVE } from '../../../../constants';

import './todo.css';

class ToDo extends Component {

  state = {
    taskText: '',
  }

  handlerInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  handleAddTask = ({ key }) => {
    const { taskText } = this.state;
    if ( taskText.length > 3 && key === 'Enter' ) {
      const { addTask } = this.props;
      addTask({
        id: (new Date()).getTime(),
        text: taskText,
        isCompleted: false,
      });
      this.setState({
        taskText: '',
      })
    }
  }

  handleActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  handleFilterTasks = ({ tasks, filters }) => {
    switch(filters) {
      case COMPLETED:
        return tasks.filter(task => task.isCompleted);
      case ACTIVE:
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  }

  render() {
    const { taskText } = this.state;
    const { tasks, deleteTask, completeTask, changeFilter, filters } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.handleFilterTasks({tasks, filters});
    const tasksCounter = this.handleActiveTasksCounter(tasks)

    return (
      <div className="todo-wrapper">
        <ToDoInput 
          onKeyPress={this.handleAddTask} 
          onChange={this.handlerInputChange}
          value={taskText}  
        />
        {isTasksExist && 
        <ToDoList 
          deleteTask={deleteTask}
          completeTask={completeTask}
          tasksList={filteredTasks} 
        />}
        {isTasksExist && <Footer amount={tasksCounter} activeFilter={filters} changeFilter={changeFilter} />}
      </div>
    );
  }
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), {addTask, deleteTask, completeTask, changeFilter})(ToDo);
