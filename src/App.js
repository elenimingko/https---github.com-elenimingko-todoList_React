
import React, { useReducer } from 'react';
import AddTodo from './component/addTodo';
import TodoList from './component/todoList';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE_DONE':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const toggleDone = (id) => {
    dispatch({ type: 'TOGGLE_DONE', payload: id });
  };

  const editTodo = (id, text) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, text } });
  };

  return (
    <div>
      <h1>TODO App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        toggleDone={toggleDone}
      />
    </div>
  );
};

export default App;


