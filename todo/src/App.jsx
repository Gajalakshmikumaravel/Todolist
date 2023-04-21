// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Todo from './components/todo/todo';
import Newitem from './components/Newitem/Newitem';
import{useEffect, useState}from "react";
import {nanoid} from "nanoid";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

 const App=()=> {
  const[list,setList]=useState([])
  const [editState,setEditState]=useState({})

  useEffect(()=>{
    fetch('http://localhost:3001/api/v2/todo').then((res)=>{
      res.json().then((json)=>{
        setList(json.data)
         }) 
        })
        .catch(()=>{
          console.log('network error!!')
        })
  },[]  )

  
  const addItem=(item)=>{
    item.id=nanoid()

    // setList((prev)=>[item, ...prev])
    fetch('http://localhost:3001/api/v2/todo',{
    method:'POST',
    headers:{
    'Accept':'application/json,text/plain,*/*',
    'Content-Type':'application/json'
    },
    body: JSON.stringify(item)
     
  }).then(()=>{
   
      setList((prev)=>[json.data, ...prev])
      toast.success('added successfully')
    })
  
}
const deleteItem=(id)=>{
  
 
  fetch(`http://localhost:3001/api/v2/todo/${id}` ,{
    method  :'DELETE',
    headers :{
      'Accept' : 'application/json ,text/plain ,*/*',
      'Content-Type': 'application/json'
    },
  }).then((res)=>{
    res.json().then((json)=>{
      console.log(json)
      const filteredList = list.filter((item) => item.id !== id)
      setList([...filteredList])
      toast.error("Deleted Successfully");
    })
  })
}
  const triggerEdit=(item)=>{
    
      setEditState(item)
  }

  const editItem=(updatedItem)=>{
      const updatedList =  list.map((item)=>
           item.id===updatedItem.id?updatedItem:item)
           setList([...updatedList])

  }

  
    return (
    <div className="app">
    <h1 className="title">TodoList</h1>
     <Newitem addItem={addItem} editState={editState}  editItem={editItem}/>
     <Todo  list={list} deleteItem={deleteItem} triggerEdit={triggerEdit}/> 
   </div>
  )
  
}

export default App
