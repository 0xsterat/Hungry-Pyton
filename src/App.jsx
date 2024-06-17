import React from 'react'
import { Route } from 'react-router-dom'
// import Home from './components/Home'
import { MyContextProvider } from './Context/MyContext'
import AppRoutes from './routes/routes'
function App() {
  return (
    <MyContextProvider>
    <div >
      {/* <Home/> */}
      <AppRoutes/>
    </div>
    </MyContextProvider>
  )
}

export default App
