import React,{ useState }from 'react';
import { add } from '../JS/actions/actions';
import { useDispatch} from 'react-redux';


const AddTask = () => {
  const dispatch= useDispatch();
  const [todo,setTodo]= useState("")

  const inputAdd=(e)=>{
    e.preventDefault()
    dispatch(add(todo))
    setTodo("")
  }
  return (
    <div>
        <form onSubmit={inputAdd}>
        <input type="text" placeholder='Add to do...' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <input type="submit" value="add task"/>
        </form>
    </div>
  )
}

export default AddTask