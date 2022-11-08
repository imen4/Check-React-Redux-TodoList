import React from 'react';
import Task from './Task';
import { useSelector} from 'react-redux';

const ListTask = () => {
  const array= useSelector((state)=>state.inputReducer)
  return (
    <div>
      {array.map((el)=> <Task t={el} key={el.id} />) }
      
      </div>
  )
}

export default ListTask