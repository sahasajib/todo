import React, { useState } from 'react'

import { v4 as uuidv4} from 'uuid'

import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'



const Home = () => {

    const [todos, setTodos] = useState([]);
    const handleTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), todo}];
        });
        console.log(todos)
    };
    const handleRemoveTodo = (id) => {
       
       setTodos((prevTodos)=> {
        const fileteredTodos = prevTodos.filter((todo) => todo.id !== id)
         return fileteredTodos
       });
    }

  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <NewTodo onAddTodo={handleTodo}/>
        <Todos  todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home