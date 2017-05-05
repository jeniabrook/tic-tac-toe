import React from 'react';

const Announcement = (props) => {
  return(
    <div  className={props.winner ? 'overlay' : 'hidden'}>
      <div className='overlay-content'>
        <h1>Game Over {props.winner}</h1>
        <button className='button' onClick={props.onClick}>Do you want to play again?</button>
      </div>
    </div>
  );
}

export default Announcement;