import { useState } from "react"

export default function App(){
  function HeaderTitle(){
    const [title, settitle] = useState("Prince")

    function changeTitle(){
      settitle(`The value is ${Math.random()}`)
    }
    return(
      <>
      <button onClick={changeTitle}>Update the first</button>
      <Header title={title}/>
      </>
    )
  }
  return(
    <>
    <HeaderTitle/>
    <Header title='Prince1'/>
    <Header title='Prince2'/>
    </>
  )
  function Header({title}){
    return(
    <div>{title}</div>)
  }
}
