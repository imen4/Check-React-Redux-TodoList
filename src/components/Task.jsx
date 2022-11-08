import React from 'react'
import { check} from '../JS/actions/actions'
import { useDispatch} from 'react-redux'


const Task = ({t}) => {
  const dispatch= useDispatch();
  return (
    <div>
      <input type="checkbox" onChange={()=> dispatch(check(t.id))}/>
      {t.description}
    
      </div>
  )
}

export default Task