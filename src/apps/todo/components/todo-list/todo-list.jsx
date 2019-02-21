import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, deleteTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem 
        completeTask={completeTask} 
        deleteTask={deleteTask} 
        id={id} key={id} 
        text={text} 
        isCompleted={isCompleted}
      />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
}

ToDoList.defaultProps = {
  tasksList: [],
}

export default ToDoList;
