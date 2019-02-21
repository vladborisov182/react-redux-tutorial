import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, isCompleted, deleteTask, id, completeTask }) => (
  <li className="todo-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i className="fas fa-times" onClick={() => deleteTask(id)} />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
}

export default ToDoItem;
