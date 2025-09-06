import React from 'react'
import AddTask from './component/addTask';
import Tasklist from './component/Tasklist';
import FilterTask from './component/FilterTask';

function App() {
  return (
    <>
      <h1>Task Menager</h1>
      <AddTask/>
       <FilterTask/>
      <Tasklist/>
     
    </>
  )
}

export default App
