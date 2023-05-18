import { useState } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './App.css'

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <>
      <div className='text-3xl font-bold text-center p-5 bg-slate-700 text-white'>
        Book-selling-website
      </div>
      
      {/* Navbar */}
      <nav className='bg-gray-200 dark:bg-gray-700'>
        <div className='max-w-screen-xl px-4 py-3 mx-auto'>
          <div className='flex items-center'>
            <ul className='flex space-x-8 font-medium mt-0 text-m mr-4'>
              <li>
                <Link to='/' className='text-gray-800 hover:underline'>Home</Link>
              </li>
              <li>
                <Link to='/login' className='text-gray-800 hover:underline'>Login</Link>
              </li>
              <li>
                <Link to='/signup' className='text-gray-800 hover:underline'>Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
