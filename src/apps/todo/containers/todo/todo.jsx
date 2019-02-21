import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import { addTask } from '../../actions/actionCreator';

import './todo.css';

class ToDo extends Component {

  state = {
    activeFilter: 'all',
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

  render() {
    const { activeFilter, taskText } = this.state;
    const { tasks } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.handleAddTask} onChange={this.handlerInputChange} value={taskText} />
        {isTasksExist && <ToDoList tasksList={tasks} />}
        {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), {addTask})(ToDo);
