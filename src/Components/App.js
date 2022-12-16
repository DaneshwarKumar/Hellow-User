import React, { useState } from "react";
import './App.css'

function App(){
  
  // getting the initial values value null by hooks 
  const [name,setName] = useState('');
  const [fullName, setFullname] = useState("");

  // function to get the input 
  function inputChange(event){
    setName(event.target.value)
  }

  // function to display the input 
  function onSubmit(){
     setFullname(name);
  }

  return (
   <div>
    <h1>Hellow {fullName} </h1>
    <input type='text' placeholder="Enter Your name..."  onChange={inputChange}/>
    <button onClick={onSubmit}> Click Me </button>
   </div>
  )
}


export default App;


