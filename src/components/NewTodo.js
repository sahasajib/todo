import React, { useState } from 'react'

import style from './newtodo.module.css'

const NewTodo = (props) => {

  const [todo, setTodo] = useState({title: "", desc: ""})  
  const {title, desc} = todo
  const handleChange =(e) => {
    const name = e.target.name
    setTodo((oldTodo)=>{
        return {...oldTodo, [name]: e.target.value}
    })
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      props.onAddTodo(todo)
      setTodo({title: "", desc: ""})
  }

  return (
  <form action="" className={style.form} onSubmit={handleSubmit}>
    <div className={style["form_field"]}>
        <label htmlFor="title">Title: </label>
        <input 
            type="text" 
            id="title" 
            name="title" 
            value={title} 
            onChange={handleChange}/>
    </div>
    <div className={style["form_field"]}>
        <label htmlFor="desc">Description: </label>
        <textarea 
            type="desc" 
            id="desc" 
            name="desc" 
            value={desc} 
            onChange={handleChange}/>
    </div>
    <button type="submit" className={style.button}>Add todo</button>
  </form>
  );
};

export default NewTodo