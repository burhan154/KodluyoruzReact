
function Todo ({index ,todo,deleteTodo,toggleTodo,editTodo}) {  
  return (
    <li key={index} mv-multiple="todo"
    className={todo.done ? "completed" :""}>
    <div className="view">
      <input property="done" className="toggle" type="checkbox" onChange={()=> toggleTodo(todo.id)} checked={todo.done}/>
      <label property="text"><input className={todo.done ? "textbox-complete" :"textbox"} value={todo.text}  onChange={(e)=> editTodo({id:todo.id , title:e.target.value ,done:todo.done})}/></label>
      <button className="destroy" onClick={()=> deleteTodo(todo)}></button>
    </div>
  </li>
  );
};

export default Todo;