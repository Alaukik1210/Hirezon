import {  Route, Routes } from "react-router-dom"
// import Navbar from "./components/shared/Navbar"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import  Home  from "./components/Home"
import Jobs from "./components/Jobs"
import Browse from "./components/Browse"
import Profile from "./components/Profile"
import JobDiscription from "./components/JobDiscription"
import Companies from "./components/admin/companies"
import CompanyCreate from "./components/admin/CompanyCreate"
import CompanySetup from "./components/admin/companySetup"

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
      <Route path="/admin/companies" element={<Companies/>}/>
      <Route path="/admin/companies/create" element={<CompanyCreate/>}/>
      <Route path="/admin/companies/:id" element={<CompanySetup/>}/>

    </Routes>
    </>
  )
}

export default App
