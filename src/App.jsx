import React from 'react'
import AddTask from './components/AddTask';
import Tasklist from './components/Tasklist';
import FilterTask from './components/FilterTask';

function App() {
  return (
    <>
      <center><h1>Task Menager</h1></center>
      <AddTask/>
      <FilterTask/>
      <Tasklist/>
     
    </>
  )
}

export default App
