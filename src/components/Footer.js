import './Footer.css'

const Footer = ({ todoList, setTodoList, activeTodoList, todoFilter, setTodoFilter }) => {

  const clearCompleted = () => {
    setTodoList(todoList.filter(todo => !todo.isCompleted))
  }

  const handleKeyDown = (e, filter) => {
    if (e.code === 'Space' || e.code === 'Enter'){
      setTodoFilter(filter)
    }
  }

  const clearOnKeyDown = e => {
    if (e.code === 'Space' || e.code === 'Enter') {
      clearCompleted()
    }
  }

  return (
    <div className="footer">
      <div className="footer-inner">

        <div className="footer-items-left">
          <p><span> {activeTodoList.length} </span> {activeTodoList.length === 1 ? 'item' : 'items'} left</p>
        </div>

        <div className={`footer-filters desktop ${todoFilter}`}>
          <p 
          role='button' 
          tabIndex='0' 
          onClick={ () => setTodoFilter('all') } 
          onKeyDown={ e => handleKeyDown(e, 'all')}
          >All</p>
        
          <p
          role='button' 
          tabIndex='0' 
          onClick={ () => setTodoFilter('active') } 
          onKeyDown={ e => handleKeyDown(e, 'active')} 
          >Active</p>

          <p 
          role='button' 
          tabIndex='0' 
          onClick={ () => setTodoFilter('completed') } 
          onKeyDown={ e => handleKeyDown(e, 'completed')} 
          >Completed</p>

        </div>

        <div className="footer-clear" >
          <p tabIndex='0' onClick={clearCompleted} onKeyDown={clearOnKeyDown}>Clear Completed</p>
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
