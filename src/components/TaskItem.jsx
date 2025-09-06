import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/task/taskSlice';

const TaskItem = ({task}) => {
   const dispatch = useDispatch();
  return (
        <li className={`task ${task.completed ? 'completed' : ''}`}>
          {task.text}
          <div>
            <button className='button' onClick={()=>dispatch(toggleTask(task.id))}>{task.completed ? "Undo" : "Done"}</button>
            <button className='button delete' onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        </li>
  )
}

export default TaskItem