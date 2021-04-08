import './AddTodo.css'

import {useState} from 'react'

const AddTodo = ({setTodoList}) => {

  const [todoName, setTodoName] = useState('')
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (todoName === '') {
      setShowError(true)
    }
    
    else {
      const newTodo = {
        todoText: todoName,
        isCompleted: false,
        id: new Date().getTime().toString()
      }

      setShowError(false)
      setTodoList(prevTodoList => [...prevTodoList, newTodo])
    }
    
    setTodoName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={`add-todo ${ showError ? 'error' : ''}`  } >
        <input type="checkbox" aria-label='Add todo' />
        <input 
          type="text"
          value={todoName}
          title= 'Add Todo'
          aria-label='Add todo'
          onChange={ (e) => setTodoName(e.target.value) }
          placeholder={ showError ? 'Field cannot be empty' : 'Create a new todo...' }
        />
        <span></span>
      </div>
    </form>
  );
}
 
export default AddTodo;