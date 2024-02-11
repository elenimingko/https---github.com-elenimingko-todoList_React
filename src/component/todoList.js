// TodoList.js
import React from 'react';
import TodoItem from './todoItems';

const TodoList = ({ todos, removeTodo, editTodo, toggleDone }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default TodoList;

