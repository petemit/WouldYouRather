import React from 'react';
export default function Avatar (props) {
    return (
        <div className={props.align}>
        <img
        src={props.avatarURL}
        alt={`Avatar of user ${props.user}`}
        className='avatar' />
        <p className="center">{props.user}</p>
        </div>
        
    )    
}