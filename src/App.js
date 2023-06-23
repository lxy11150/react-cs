import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Forum from './pages/Forum'
import Main from './pages/Home/Main'
import Usercenter from './pages/Usercenter'
import Other from './pages/Other'
import Contest from './pages/Contest'
import Post from './pages/Post'
import Discuss from './pages/Discuss'
import Agreement from './pages/Agreement/agreement'
import Problems from './pages/Problems'
import ModifyInformstion from './pages/ModifyInformation'
import Allposts from './pages/Allposts'
import Information from './pages/Information'
import MyHomepage from './pages/MyHomepage'
import MyContest from './pages/MyContest'
import MyForum from './pages/MyForum'
import Edit from './pages/Edit'
import AllComments from './pages/AllComments'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} >
          <Route path="main" element={<Main />} />
          <Route path="forum" element={<Forum />} />
          <Route path='post' element={<Post />} />
          <Route path="usercenter" element={<Usercenter />} >
            <Route path='myhomepage' element={<MyHomepage />} />
            <Route path='mycontest' element={<MyContest />} />
            <Route path='myforum' element={<MyForum />} />
          </Route>
          <Route path='information' element={<Information />} />
          <Route path='contest' element={<Contest />} >
          </Route>
          <Route path='problem' element={<Problems />} />
          <Route path='discuss/:postid/:username' element={<Discuss />} />
          <Route path='allposts' element={<Allposts />} />
          <Route path='other' element={<Other />} />
          <Route path='edit/:postid' element={<Edit />} />
          <Route path='allcomments/:postid' element={<AllComments />} />
        </Route>
        <Route path='/agreement' element={<Agreement />} />
        <Route path="/register" element={<Register />} />
        <Route path="/modify" element={<ModifyInformstion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home/main" />} />
      </Routes>
    </>
  );
}

export default App;
