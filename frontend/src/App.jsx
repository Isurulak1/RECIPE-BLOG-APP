import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'

const App = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header />
    <Outlet />
    </div>
  )
}

export default App
