import React from 'react'
import Add from "/home/codert/Documents/programming/benibul/src/img/sea otter.png"

export const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Kullanci ara'/>
      </div>
      <div className="userChat">
        <img src={Add} alt="Qowle02" />
        <div className='userChatInfo'>
          <span>Sea oaster</span>
          </div>    
      </div>
    </div>
  )
}

export default Search