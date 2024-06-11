import React from 'react'

const App = () => {
  return (
    <div>
      <CardWrap innercomp={<TextComp />} />
      <CardWrap innercomp={<TextComp2/>} />
    </div>
  )
}

function TextComp(){
  return <div>Hi there!</div>
}
function TextComp2(){
  return <div>Prince Kumar here</div>
}

function CardWrap({innercomp}){
  return <div style={{border:"2px black solid",padding:"15px",margin:"5px",fontWeight:"bold"}}>{innercomp}</div>
}

export default App
