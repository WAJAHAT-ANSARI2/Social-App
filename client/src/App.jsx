import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login'
import Feed from './Pages/Feed'
import Messages from './Pages/Messages'
import ChatBox from './Pages/ChatBox'
import Connections from './Pages/Connections'
import Discover from './Pages/Discover'
import Profile from './Pages/Profile'
import CreatePost from './Pages/CreatePost'

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Login/>}>
          <Route index element={<Feed/>} />
          <Route path="messages" element={<Messages/>}></Route>
          <Route path="messages/:userId" element={<ChatBox/>}></Route>
          <Route path="connections" element={<Connections/>}></Route>
          <Route path="messages/:userId" element={<ChatBox/>}></Route>
          <Route path="discover" element={<Discover/>}></Route>
          <Route path="profile/:profileId" element={<Profile/>}></Route>
          <Route path="create-post" element={<CreatePost/>}></Route>
          
        </Route>
      </Routes>
    </>
  )
}

export default App