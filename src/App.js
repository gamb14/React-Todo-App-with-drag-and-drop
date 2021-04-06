import './App.css';

import {useState} from 'react'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'

const App = () => {

  const [lightMode, setLightMode] = useState(true)
  const [todoList, setTodoList] = useState([])
  const [todoFilter, setTodoFilter] = useState('all')
  
  const activeTodoList = todoList.filter(todo => !todo.isCompleted)
  const completedTodoList = todoList.filter(todo => todo.isCompleted)

  return (
    <div className={`app ${lightMode ? 'light' : 'dark'}`}>
      <div className="container">
        <Header lightMode={lightMode} setLightMode={setLightMode}/>
        <AddTodo setTodoList={setTodoList} />
        <div className="todo-list">
          {todoFilter === 'all' && todoList.map(todo => 
            <TodoItem
              todo={todo}
              setTodoList={setTodoList}
              key={todo.id}
            />
          )}
          {todoFilter === 'active' && activeTodoList.map(todo => 
            <TodoItem
              todo={todo}
              setTodoList={setTodoList}
              key={todo.id}
            />
          )}
          {todoFilter === 'completed' && completedTodoList.map(todo => 
            <TodoItem
              todo={todo}
              setTodoList={setTodoList}
              key={todo.id}
            />
          )}
        </div>
        <Footer 
          todoList={todoList}
          setTodoList={setTodoList}
          todoFilter={todoFilter}
          setTodoFilter={setTodoFilter}
          activeTodoList={activeTodoList}
        />
      </div>
    </div>
    
  );
}

export default App;
