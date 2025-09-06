import React from 'react'
import AddTask from './components/AddTask';
import Tasklist from './components/Tasklist';
import FilterTask from './components/FilterTask';

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
