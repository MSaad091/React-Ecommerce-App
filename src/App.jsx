// import React from 'react'
// import Home from './components/Home'
// import { Route, Routes } from 'react-router-dom'
// import CartDetail from './components/CartDetail'
// import UserProduct from './components/UserProduct'

// function App() {
//   return (
//      <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/cart/:id' element={<CartDetail/>}/>
//       <Route  path='/cart/:id/add' element={<UserProduct/>}  />
//     </Routes>
//     // <img src="/public/sheoes3 (1).jpg" alt="" />
//   )
// }
 
// export default App
import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import CartDetail from './components/CartDetail'
import UserProduct from './components/UserProduct'
import Shop from './Shop'
import Form from './components/Form'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart/:id' element={<CartDetail />} />
      <Route path='/cart/:id/add' element={<UserProduct />} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/cart/pay' element={<Form/>} />
      <Route path='/about' element={<About/>}  />
      <Route path='/contact'  element={<Contact/>} />
     
    </Routes>
   </>

  )
}

export default App
