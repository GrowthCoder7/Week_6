import React from 'react'

const App = () => {
  return (
    <div>
      <CardWrap >
        {/* <div>Hello there</div> */}
        <TextComp/>
      </CardWrap>
    </div>
  )
}

function CardWrap({children}){
  console.log(children)
  return <div style={{border:"2px black solid",padding:"15px",margin:"5px",fontWeight:"bold"}}>{children}</div>
}

function TextComp(){
  return <div>Prince this side!</div>
}

export default App
