import React from 'react'
import { useSelector } from 'react-redux'
import { setFilter } from '../features/task/taskSlice';
import { useDispatch } from 'react-redux';

const FilterTask = () => {
    const filter=useSelector(state=>state.tasks.filters);
    const dispatch=useDispatch();
    console.log(filter);
  return (
    <div className='filter'>
        <button onClick={()=>dispatch(setFilter('all'))} className={`button ${filter ==='all' ? 'active' : ''}`}>All</button>
        <button onClick={()=>dispatch(setFilter('completed'))} className={`button ${filter ==='completed' ? 'active' : ''}`}>Completed</button>
    </div>
  )
}

export default FilterTask