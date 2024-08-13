import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App