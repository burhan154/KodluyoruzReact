import Todo from './Todo';
import Loading from './Loading';

function TodoList ({todos,loading,deleteTodo,toggleTodo,toggleAll,editTodo}) {
  
  return (
    <div className="list-container">
      <section className="main">
      <input property="toggleAll" id="toggle-all" className="toggle-all" type="checkbox" onChange={()=>toggleAll()} checked={todos.filter(t=> t.done===false).length===0}/>
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>
      <ul className="todo-list">
        {loading ?  <Loading/>: todos.map((todo,i) => (
            <Todo key={i} index={i}  todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
          ))}
      </ul>
      </section>        
    </div>
  );
};

export default TodoList;
