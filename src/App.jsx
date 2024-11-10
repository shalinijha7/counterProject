import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    console.log("clicked", counter)
    if(counter >= 20){
      return
    }
    setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    console.log("clicked", counter)
    if(counter <= 0 ){
      return 
    }
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
    <h1>Counter app</h1>  
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value: {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
