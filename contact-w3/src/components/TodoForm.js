import React, { useState } from 'react';

function TodoForm  ({ addTodo })  {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({
      text,
      done:false
    });
    setText('');
  };

  return (
    <div className="form-container">
      <h1>todos</h1>
      <header className="header">
      <form onSubmit={handleSubmit}>
          <input property="newTodo" className="new-todo"
              placeholder="What needs to be done?"
              value={text}
              onChange={e => setText(e.target.value)}
              autoFocus
              required/>
        </form>
      </header>
    </div>
  );
};

export default TodoForm;
