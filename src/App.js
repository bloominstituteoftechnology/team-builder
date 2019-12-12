import React,{useState} from 'react';
import data from "./data";
import Form from "./Form";
import Member from "./Member";
import logo from './logo.svg';
import './App.css';

function App() {
 const [members,setMembers]=useState(data)

 const addNewMember=member=>{
   setMembers([...members,member])
 }

}
  

        export default App;
