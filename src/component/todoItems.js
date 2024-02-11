// TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, removeTodo, editTodo, toggleDone }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (editedText.trim()) {
      editTodo(todo.id, editedText);
      setEditing(false);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span >
            {todo.text}
          </span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;

