import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const Tasklist = () => {
  const { items, filters } = useSelector((state) => state.tasks);

  const filteredItems = items.filter((task) => {
    if (filters === 'completed') return task.completed;
    if (filters === 'active') return !task.completed;
    return true; // 'all'
  });

  return (
    <ul>
      {filteredItems.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default Tasklist