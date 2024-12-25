import React,{useState} from "react";
import Input from "./componants/Input"
import "./style.css";

export default function App() {
  const[tasklist,settasklist]=useState([])
  return (
    <div>    
          <Input tasklist={tasklist} settasklist={settasklist}/>
    </div>
  );
}
