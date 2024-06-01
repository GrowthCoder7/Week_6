import { useState } from "react"
import { memo } from 'react';

function App() {
  const [title, settitle] = useState("Prince");

  function changeTitle() {
    settitle(`The value is ${Math.random()}`)
  }

  return (
    <div>
      <button onClick={changeTitle}>Update title</button>
      <Header title={title} />
      <Header title="My name is Prince1" />
      <Header title="My name is Prince2" />
    </div>
  )
}

const Header = memo(function ({title}) {
  return <div>
    {title}
  </div>
})

export default App
