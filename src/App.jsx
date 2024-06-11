import React, { useEffect, useState } from 'react'

function App() {
  const [todos, settodos] = useState([])
  

  useEffect(()=>{
    setInterval(() => {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async(res)=>{
      const data=await res.json()
      settodos(data.todos)
    })
  }, 5000);
  },[]) //Sends out fetch request every 5 secs

  return (
  <div >
  {todos.map(todo=><Todo key={todo.id} title={todo.title} desc={todo.description} done={String(todo.completed)}/>)}
  </div>
  )
}


function Todo({title,desc,done}){
  return(
    <>
    <h1>{title}</h1>
    <h3>{desc}</h3>
    <button>{done}</button>
    </>
  )
}
export default App
