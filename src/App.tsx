import React from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import Todos from './components/TodosList';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <h1>TODO APP</h1>
      <Navbar/>
      <AddToDo/>
      <Todos/>

    </main>
  );
}

export default App;
