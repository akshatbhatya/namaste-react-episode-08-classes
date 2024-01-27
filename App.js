import React from 'react'
import Header from './src/Header/Header'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux'
import store from './src/Utils/Store'


function App() {
  return (
    <div>
      <Provider store={store}>

      <Header/>
      <Outlet/>
      </Provider>
    </div>
  )
}

export default App
