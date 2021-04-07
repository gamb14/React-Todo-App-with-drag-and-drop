import './App.css';

import {useState} from 'react'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


const App = () => {

  const [lightMode, setLightMode] = useState(true)
  const [todoList, setTodoList] = useState([])
  const [todoFilter, setTodoFilter] = useState('all')
 
  const activeTodoList = todoList.filter(todo => !todo.isCompleted)
  const completedTodoList = todoList.filter(todo => todo.isCompleted)

  const handleOnDragEnd = (result) => {

    if (!result.destination) {
      return;
    }

    const items = todoList
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0 , reorderedItem )

    setTodoList(items)
  }

  return (
    <div className={`app ${lightMode ? 'light' : 'dark'}`}>
      <div className="container">

        <Header lightMode={lightMode} setLightMode={setLightMode}/>
        <AddTodo setTodoList={setTodoList} />

        <DragDropContext onDragEnd={handleOnDragEnd}>

          <Droppable droppableId='todo-drag-drop'>
          {(provided) => (

            <div className="todo-list" {...provided.droppableProps} ref={ provided.innerRef }>

              {todoFilter === 'all' && todoList.map((todo,index) => (

                <Draggable key={ todo.id } draggableId={ todo.id } index= {index}>
                  {(provided) => (
                    <div className='wrapper' {...provided.draggableProps} {...provided.dragHandleProps}  tabIndex='-1' ref={provided.innerRef} >
                      <TodoItem todo={ todo } setTodoList={ setTodoList } />
                    </div>
                  )}
                </Draggable>

              ))}

              {todoFilter === 'active' && activeTodoList.map((todo,index) => (

                <Draggable key={ todo.id } draggableId={ todo.id } index= {index}>
                  {(provided) => (
                    <div className='wrapper' {...provided.draggableProps} {...provided.dragHandleProps} tabIndex='-1' ref={provided.innerRef} >
                      <TodoItem todo={ todo } setTodoList={ setTodoList } />
                    </div>
                    )}
                </Draggable>

              ))}

              {todoFilter === 'completed' && completedTodoList.map((todo,index) => (

                <Draggable key={ todo.id } draggableId={ todo.id } index= {index}>
                  {(provided) => (
                    <div className='wrapper' {...provided.draggableProps} {...provided.dragHandleProps} tabIndex='-1' ref={provided.innerRef} >
                      <TodoItem todo={ todo } setTodoList={ setTodoList } />
                    </div>
                  )}
                </Draggable>

              ))}
              {provided.placeholder}
            
            </div>
          )}
          </Droppable>

        </DragDropContext>

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