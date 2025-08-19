import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewAllProducts from './Components/features/products/viewAllProducts'
import Login from './Components/features/users/Login'
import HomePage from './Components/HomePage'
import RegisterForm from './Components/features/users/RegisterForm'
import ProductsByCategory from './Components/features/products/ProductByCategory';


function App() {


  return (
    <>
      {/* <ViewAllProducts></ViewAllProducts> */}
      {/* <Login></Login> */}
      
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/category/:categoryName" element={<ProductsByCategory />} /> {/* 🆕 שונה */}

      </Routes>
    </Router>
    
    </>
  )
}

export default App
