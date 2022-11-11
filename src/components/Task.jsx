import React,{ useState } from 'react'
import { check} from '../JS/actions/actions'
import { useDispatch} from 'react-redux'
import EditTask from './EditTask'

const Task = ({t}) => {
  const [done,setDone]=useState(t.isDone)
  const dispatch= useDispatch();
  
  return (
    <div style={{margin:"10px", display:"flex" }}>
      <span style={{textDecoration: done ? 'line-through' : 'none'}}>
        {t.description}
        </span>
      <button style={{margin:"0 20px"} } onClick={()=>{setDone(!done) ;dispatch(check(t.id))}}>
           {done?"done":"undone"}
      </button>
      <EditTask t={t}/>
    
      </div>
  )
}

export default Task