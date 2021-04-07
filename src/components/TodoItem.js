import './TodoItem.css'
import {useState} from 'react'

const TodoItem = ({todo, setTodoList }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = ()=> {

    setIsChecked(!isChecked)
    
    setTodoList(prevTodoList => {     
      prevTodoList.forEach(prevTodo => {
        if(prevTodo.id === todo.id) {
          todo.isCompleted = !isChecked
        }
      })

      return [...prevTodoList]
    })
  }


  const handleKeyDown = e => {
    if (e.code === 'Space' || e.code === 'Enter'){
      handleChange(e)
    }
  }

  const removeItem = (id) => {
    setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== id))
  }
  
  return (
     
        <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`} >
          <label>
            <input onClick={handleChange} type="checkbox" aria-label='Change the checked Value' />
            <span></span>
          </label>
          <p tabIndex='0' onClick={handleChange} onKeyDown={handleKeyDown}> { todo.todoText } </p>
          <img onClick={() => removeItem(todo.id)} src="./images/icon-cross.svg" className='cross' alt="cross"  />
        </div>
      
  );
}

export default TodoItem;