import { useState, useEffect } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./style.css";
import { TodoList } from "./TodoList";

export default function App() {
  
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue  === null) return []
    
    return JSON.parse(localValue)
  });

  // use useEffect to  fetch data when the component mounts
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo));
  }, [todo])

  function addTodo(title) {
    setTodo((currentTodo => {
      return [
          ...currentTodo, 
          {id: crypto.randomUUID(), title, completed: false},
      ]
    }));
  }

  function toggleTodo(id, completed) {
    
    //
    // Update my currentTodo to change the id's corresponding item's 'completed'

    setTodo(currentTodo => {
      return currentTodo.map(item => {
        if (item.id == id) {
          
          // 
          // item.completed = completed
          // this is mutating the state directly which is not recommended in React
          // so we create a new object and return it          
          //

          return { ...item, completed}
        }
        return item
      })
    })
  }

  function deleteTodo (id) {
    setTodo(currentTodo => {
      return currentTodo.filter(item => item.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1>To Do List App</h1>
      <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}