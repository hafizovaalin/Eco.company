import React from 'react'
import Clients from './Clients'
import Community from './Community'
import HeroSection from './Hero-section'


export default function Home () {
  return (
    <div>
      <HeroSection />
      <Clients />
      <Community />
    </div>
  )
}