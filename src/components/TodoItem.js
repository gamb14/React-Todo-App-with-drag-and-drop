import './TodoItem.css'
import {useState} from 'react'

const TodoItem = ({todo, setTodoList}) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {

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

  const removeItem = (id) => {
    setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== id))
  }
  
  return (
      <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`} >
        <label>
          <input onClick={handleChange} type="checkbox"/>
          <span></span>
        </label>
        <p onClick={handleChange}> { todo.todoText } </p>
        <img onClick={() => removeItem(todo.id)} src="./images/icon-cross.svg" className='cross' alt="cross"  />
      </div>
  );
}

export default TodoItem;