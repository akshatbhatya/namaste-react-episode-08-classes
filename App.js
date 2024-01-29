import React from 'react'
import Header from './src/Header/Header'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux'
import store from './src/Utils/Store'
import Forms from './src/Forms/Form'


function App() {
  return (
    <div>
      <Provider store={store}>

      <Header/>
      {/* <Forms/> */}
      <Outlet/>
      </Provider>
    </div>
  )
}

export default App
