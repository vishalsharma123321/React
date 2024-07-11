import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import chai from "./chai"


 function Myapp(){
  return (
    <div>
      <h1>Custiom App !</h1>
    </div>
  )
 }

 function Usingfunction(){
  return (
    <div>
      <h1>vishal this side !!</h1>
    </div>
  )
 }

 const ReactElement = {
  type:'a',
  props:{
      href : 'https://google.com',
      target : '_blank'
  },
  children:'click me to visit google'
} 

const addAnotherElement = (
<a href="https://google.com" target='_blank'>visite google  </a>
 )


 // what if we want to add a veriable in the react object like below one
 const myname = " tony stark "
 // lets add this in the react object 
 const NewReactElement = React.createElement(
  'a',  // here we add the element we want 
  {href : 'https://google.com' ,target :'_blank' }, // here attributs for the element 
  'click me the visit google', // here text 
  myname, // here veriable 
 )

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
    //  <App />
    //  <Myapp/>
//     <Usingfunction/> 
    NewReactElement    
  //  </React.StrictMode>ggggg
)
