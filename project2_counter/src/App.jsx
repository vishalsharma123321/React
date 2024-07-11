import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // here we can see that he we are using the useState in the react 
  // in the on click we have created two functions one out side and one for 
  // remove value inside of the onclick to show how we can use the arrow functons
  let [counter , setcounter] = useState(19);

const addvalue = ()=>{
  if(counter<20){
  setcounter(counter+1)
  }
}
  return (
    <>
    <h1>chai aur react </h1>
    <h2>counter value: {counter} </h2>
    <button onClick={addvalue}>Add value </button>
    <br/>
    <button onClick={()=>
      {
          if(counter>0){
          setcounter(counter-1)
      }
      }}>Remove value </button>
    </>
  )
}

export default App
