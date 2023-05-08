import React from 'react'
import Add from "/home/codert/Documents/programming/benibul/src/img/abdulmecit.jpeg"


export const Chats = () => {
  return (
    <div className='chats'>
       <div className="userChat">
        <img src={Add} alt="Qowle" />
        <div className='userChatInfo'>
          <span>Qowle</span>
          <p>Hi</p>
          </div>    
      </div>
      <div className="userChat">
        <img src={Add} alt="mecit" />
        <div className='userChatInfo'>
          <span>abdulmecit</span>
          <p>Hi</p>
          </div>    
      </div>
      <div className="userChat">
        <img src={Add} alt="mecit" />
        <div className='userChatInfo'>
          <span>abdulmecit</span>
          <p>Hi</p>
          </div>    
      </div>
    </div>
  )
}

export default Chats