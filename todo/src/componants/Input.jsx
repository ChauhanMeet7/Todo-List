import React, { useState } from 'react';
import "./Input.css"
function Input({ task,index,tasklist, settasklist }) {
  const [input, setinput] = useState('');
  function handlchange(e) {
    setinput(e.target.value);
  }
  function handleclick(e) {
    e.preventDefault();
    settasklist([...tasklist, input]);
    setinput('');
    console.log(input);
  }
  
  function handleDelete(){
    let removeindex=tasklist.indexOf(task);
    tasklist.splice(removeindex,1)
    settasklist((currentTask=>currentTask.filter(todo=>index===removeindex)))
  }
  return (
    <div className="main">
      <h1>To-Do List</h1> 
      <div className="top">
      <input
      className="inpuut"
        type="text"
        placeholder="Enter your task"
        value={input}
        onChange={handlchange}
      />
      <button onClick={handleclick}>Add</button>
      <div className="container">
      <ul>
        {tasklist.map((task, index) => (
          <li key={index}>{task}<button onClick={handleDelete}>Delete</button></li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
}
export default Input;
