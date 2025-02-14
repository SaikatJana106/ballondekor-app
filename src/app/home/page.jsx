import React from 'react'
import Hero from '../components/Hero'
import Options from '../components/Options'
import Decoration from '../components/Decoration'
import Specialday from '../components/Specialday'
import BirthDayDecoration from '../category pages/BirthDayDecoration'
import BabyDecoration from '../category pages/BabyDecoration'
import AnniversaryDecorations from '../category pages/AnniversaryDecorations'
import BacheloretteDecorations from '../category pages/BacheloretteDecorations'
import WeOffer from '../components/WeOffer'
import Subnav from '../components/Subnav'
import Subscribe from '../components/Subscribe'


const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Options/>
      <BirthDayDecoration/>
      <Decoration/>
      <BabyDecoration/>
      <Specialday/>
      <AnniversaryDecorations/>
      <BacheloretteDecorations/>
      <WeOffer/>
      <Subscribe/>
    </div>
  )
}

export default Homepage
