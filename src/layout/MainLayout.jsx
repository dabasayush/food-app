import React from 'react'
import HeroBanner from '../components/banners/HeroBanner'
import RestroContainer from '../components/restrorents/RestroContainer'


function MainLayout() {
  const country = "india"
  return (
    <>
        {/* <Learn country={country}/> */}
        <HeroBanner />
        <RestroContainer />

    </>
  )
}

export default MainLayout