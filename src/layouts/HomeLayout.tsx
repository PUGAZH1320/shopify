import React from 'react'
import MainPage from '../components/MainPage'
import SecondPage from '../components/SecondPage'
import ThirdPage from '../components/ThirdPage'
import FourthPage from '../components/FourthPage'
import FifthPage from '../components/FifthPage'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <div>
      <MainPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <Footer/>
    </div>
  )
}

export default HomeLayout
