import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import SignUp from './pages/SignUp/SignUp'

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
