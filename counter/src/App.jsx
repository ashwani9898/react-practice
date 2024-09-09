import './App.css'
import { useState } from 'react';

function App() {

  let [counter,setCounter] = useState(15);
  
  const addValue = ()=>{
    if (counter == 20)return

    setCounter(counter+1)
  }
  const removeValue = ()=>{
    if(counter==0)return

    setCounter(counter-1)
  }

  return (
    <>
    <h1>Simple Counter Application</h1>

    <h2>Counter:{counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

