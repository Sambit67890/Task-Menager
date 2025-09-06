import React from 'react'
import './Task.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/task/taskSlice'

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch=useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTask(text));
        setText('');
    }
  return (
   <form onSubmit={handleSubmit} className='form'>
    <input placeholder='Add Task...' value={text} onChange={(e)=>setText(e.target.value)}/>
    <button type='submit' className='button'>Add</button>
   </form>
  )
}
export default AddTask