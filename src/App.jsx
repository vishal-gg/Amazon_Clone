import React from 'react'
import './App.css'
import Navbar  from './Components/Navbar'
import PageContent from './Components/PageContent'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <PageContent />
      <Footer />
    </div>
  )
}

export default App