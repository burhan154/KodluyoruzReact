function Footer ({todos,activeFilter,setActiveFilter,deleteCompletedTodo }) {

    return (
      <footer  className="footer">
      <span className="todo-count">
        <strong >{todos.filter(t=> t.done!==true).length} </strong>items left
      </span>
      
      <ul className="filters">
        <li>
          <a onClick={()=>setActiveFilter("all")} className={activeFilter==="all" ? "selected":""}>All</a>
        </li>
        <li>
          <a onClick={()=>setActiveFilter("active")}  className={activeFilter==="active" ? "selected":""}>Active</a>
        </li>
        <li>
          <a onClick={()=>setActiveFilter("completed")} className={activeFilter==="completed" ? "selected":""}>Completed</a>
        </li>
      </ul>   
      <button hidden={todos.filter(t=> t.done===true).length===0} className="clear-completed" onClick={()=>deleteCompletedTodo()}>Clear completed</button>
    </footer> 
    );
  };
  
  export default Footer;