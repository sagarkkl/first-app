import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = props => {
  const [enterText,setEnterText] = useState('');
    const addEventHandler= event =>{
        event.preventDefault();

        const newGoal={
            id:Math.random().toString(),
            text: enterText
        };

      setEnterText('');
      props.onAG(newGoal);

    };
    const textChangeEventHandler= event =>{
      setEnterText(event.target.value);  
    };

  return (
    <div>
        <form className='new-goal' onSubmit={addEventHandler}>
            <input type="text" value={enterText} onChange={textChangeEventHandler}/>
            <button type="submit">add goal</button>
        </form>
    </div>
  )
}

export default NewGoal