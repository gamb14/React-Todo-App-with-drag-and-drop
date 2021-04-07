import './Footer.css'

const Footer = ({ todoList, setTodoList, activeTodoList, todoFilter, setTodoFilter }) => {

  const clearCompleted = () => {
    setTodoList(todoList.filter(todo => !todo.isCompleted))
  }

  return (
    <div className="footer">
      <div className="footer-inner">

        <div className="footer-items-left">
          <p><span> {activeTodoList.length} </span> {activeTodoList.length === 1 ? 'item' : 'items'} left</p>
        </div>

        <div className={`footer-filters desktop ${todoFilter}`}>
          <p onClick={ () => setTodoFilter('all') }>All</p>
          <p onClick={ () => setTodoFilter('active') }>Active</p>
          <p onClick={ () => setTodoFilter('completed') }>Completed</p>
        </div>

        <div className="footer-clear">
          <p onClick={ () => clearCompleted() }>Clear Completed</p>
        </div>

      </div>

      <div className={`footer-filters mobile ${todoFilter}`}>
        <p onClick={ () => setTodoFilter('all') }>All</p>
        <p onClick={ () => setTodoFilter('active') }>Active</p>
        <p onClick={ () => setTodoFilter('completed') }>Completed</p>
      </div>

      <div className="footer-drag-drop">
        Drag and drop to reorder list
      </div>
    </div>
  );
}

export default Footer;
