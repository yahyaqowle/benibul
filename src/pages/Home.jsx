import React from 'react'
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat"
// import Chats from "../components/Chats";
// import Search from "../components/Search";
// import Navbar from "../components/Navbar";
// import Input from "../components/Input";
// import Message from "../components/Message";

export const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar/>
            <Chat/>
            {/* <Search/>
            <Navbar/>
            <Chats/>
            <Message/>
            <Input/> */}
            
        </div>
    </div>
  )
}

export default Home
