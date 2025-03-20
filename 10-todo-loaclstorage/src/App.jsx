
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoFrom, TodoIteam } from './component';

function App() {
  const [todos,setTodos]=useState([]);
  // addTodo
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }
  //updateTodo
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
  }
  //deleteTodo
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((Todo)=>Todo.id !== id))
  }
  //toggleTodo
  const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed: !prevTodo.completed
    }:prevTodo))
  }
  //localStorage get todos
  useEffect(()=>{
    const todo=JSON.parse(localStorage.getItem("todos"))
    if(todo && todo.length > 0){
      setTodos(todo)
    }
  },[])
    //localStorage set todos
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  

    
  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoFrom /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoIteam todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
