import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CatogeryCarousal from './CatogeryCarousal'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CatogeryCarousal/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home

