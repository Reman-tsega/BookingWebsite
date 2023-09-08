import React from 'react'
// import Nav from '../../Component/Nav/Nav'
import Header from '../../Component/Header/Header'
import Featured from '../../Component/Featured/Featured'
import './home.css'
import PropertyList from '../../Component/PropertyList/PropertyList'
import FeaturedProperties from '../../Component/FeaturedProperties/FeaturedProperties'
import MailList from '../../Component/MailList/MailList'
import Footer from '../../Component/Footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <div className='homeContainer'>
        <Featured />
      <h1 className='hometitle'>browse by properties</h1>
      <PropertyList />
      <h1 className='hometitle'>Home gustes love more</h1>
        <FeaturedProperties/>
        <MailList />
        <Footer/>
      </div>
    </div>
  )
}

export default Home