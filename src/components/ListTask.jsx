import React, { useState } from 'react';
import Task from './Task';
import { useSelector} from 'react-redux';


const ListTask = () => {
  const array= useSelector((state)=>state.inputReducer)
  console.log(array)
  const [state,setState]=useState('all')
  const[array2,setArray2]=useState([])

  const undoneClick=()=>{
    setState("undone")
    setArray2(array.filter((item) => !item.isDone))
    return array2
  }
  const doneClick=()=>{
    setState("done")
    setArray2(array.filter((item) => item.isDone))
    return array2
  }
  const allClick=()=>{
    setState("all")
    return state
  }
  //console.log(state)
  //console.log(array2)
  return (
    <div style={{margin:"20px 0"}}>
       <button onClick={()=>allClick()}>all</button>
       <button onClick={()=>doneClick()}>done</button>
       <button onClick={()=>undoneClick()}>undone</button>
      <div style={{margin:"20px 0"}}>
      {(() => {
        switch (state) {
          case "done":   return array2.map((el)=> <Task t={el} key={el.id} />);
          case"undone":  return array2.map((el)=> <Task t={el} key={el.id} />);
          case"all":     return array.map((el)=> <Task t={el} key={el.id} />);
          default:       return array.map((el)=> <Task t={el} key={el.id} />);
        }
      })()}
      </div>
      </div>
  )
}

export default ListTask