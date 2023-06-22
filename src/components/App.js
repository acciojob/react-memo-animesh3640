<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState, useEffect } from 'react';

function Memo() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [memoText, setMemoText] = useState('');

  useEffect(() => {
    document.title = `Memo (${todos.length})`;
  }, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, { content: 'New todo' }]);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleMemoSubmit = (e) => {
    e.preventDefault();
    if (memoText.length > 5) {
      setTodos([...todos, { content: memoText }]);
      setMemoText('');
    } else {
      alert('Memo text should be greater than 5 characters.');
    }
  };

  return (
    <div>
      <h1>Memo</h1>
      <p>Number of todos: {todos.length}</p>
      <button onClick={handleAddTodo}>Add todo</button>
      <br />
      <button onClick={handleIncrement}>Increment count: {count}</button>
      <br />
      <form onSubmit={handleMemoSubmit}>
        <label htmlFor="memo">Memo:</label>
        <br />
        <textarea
          id="memo"
          value={memoText}
          onChange={(e) => setMemoText(e.target.value)}
        />
        <br />
        <button type="submit">Add to list</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Memo;