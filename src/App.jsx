import { useState } from "react"

export default function App(){
  const [title, settitle] = useState("Prince")

  function changeTitle(){
    settitle(`The value is ${Math.random()}`)
  }
  return(
    <>
    <button onClick={changeTitle}>Update the first <title></title></button>
    <Header title={title}/>
    <Header title='Prince1'/>
    <Header title='Prince2'/>
    </>
  )
  function Header({title}){
    return(
    <div>{title}</div>)
  }
}