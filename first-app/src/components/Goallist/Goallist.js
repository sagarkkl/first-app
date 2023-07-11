import React from 'react';
import './Goallist.css';

const Goallist = props => {
    console.log(props.goals)
  return (
    <div>
    <ul className='list-css'>
        {props.goals.map(abc =>{
            return <li key={abc.id}>{abc.text}</li>
        })}
 
      </ul>
    </div>
  )
}

export default Goallist