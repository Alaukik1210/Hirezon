import {  Route, Routes } from "react-router-dom"
// import Navbar from "./components/shared/Navbar"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import  Home  from "./components/Home"
import Jobs from "./components/Jobs"
import Browse from "./components/Browse"
import Profile from "./components/Profile"
import JobDiscription from "./components/JobDiscription"


function App() {
 

  return (
    <>
  <Routes>
     
      <Route path="/" element={<Home/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/browse" element={<Browse/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/JobDiscription/:id" element={<JobDiscription/>}/>

    </Routes>
    </>
  )
}

export default App
