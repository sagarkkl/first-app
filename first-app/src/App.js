import React, { useState } from 'react';
import Goalist from './components/Goallist/Goallist';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css'

const App = () => {
  const [Listdata,setListdata]=useState([
    {id:'a1' , text:'one'},
    {id:'a2',text:'two'},
    {id:'3',text:'three'}

  ]);
  
  const addNewGoalHandler = (newGoal) =>{
   // setListdata(Listdata.concat(newGoal));
   setListdata(prevListdata=>prevListdata.concat(newGoal));
  };
  return (
    <div>
      <h1><center>List</center></h1>
      <NewGoal onAG={addNewGoalHandler}/>
      <Goalist goals={Listdata} />
      
    </div>
  )
}

export default App
