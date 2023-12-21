import React, { useState,useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';
import GetData from './components/GetData';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
      const data = GetData().todo.map((item, index) => 
        ({ ...item, id: index + 1 })
      );
      setTodos(data);
      setLoading(false);
      
  }, []);

  const addTodo = todo => {
    todos.length?
    setTodos([...todos, { ...todo, id: todos[todos.length - 1].id+1 }]):
    setTodos([{ ...todo, id: 1 }]);
  };

  const deleteTodo = todo => {
    const newTodos= todos.filter((t)=>{
      return t.id !== todo.id;
    })
    setTodos(newTodos);
  };

  const deleteCompletedTodo = () => {
    const newTodos= todos.filter((t)=>{
      return t.done !== true;
    })
    setTodos(newTodos);
  };

  const toggleAll = () => {
    const isAllChecked= todos.filter(t=> t.done===false).length===0
    const updatedTodos = todos.map(todo =>( 
      { ...todo, done: !isAllChecked }
      ));
    setTodos(updatedTodos);
  };

  const editTodo = (todo) => {
    console.log(todo)
    const updatedTodos = todos.map(t =>
      t.id === todo.id ? { todo } : t
    );
    setTodos(updatedTodos);
  };

  const toggleTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };


  const filterTodo = todos.filter((item)=>
     activeFilter ==="completed" ? item.done :activeFilter ==="active"? !item.done: item
  )

  return (
    <section className="todoapp">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filterTodo} loading={loading} deleteTodo={deleteTodo} toggleTodo={toggleTodo} toggleAll={toggleAll} editTodo={editTodo}/>
      <Footer todos={todos} activeFilter={activeFilter} setActiveFilter={setActiveFilter} deleteCompletedTodo={deleteCompletedTodo}/>
    </section>
  );
}

export default App;
