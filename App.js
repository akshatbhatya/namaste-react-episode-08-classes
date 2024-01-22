import React from 'react'
import Header from './src/Header/Header'
import { Outlet } from 'react-router'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
