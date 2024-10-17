import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './users';
import Friends from './friends';

function App() {
  function handleClick(){
    alert('button click');
  }
  const handleClick2 = () =>{
    alert('button click2')
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter>cound</Counter>




      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={()=>{alert('third click')}}>click 3</button>
      <button onClick={()=>addToFive(3)}>click 4</button>
    </>
  )
}

export default App
