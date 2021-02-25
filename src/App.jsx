import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'

function App() {
  return (
    <div>
      <NavLink to="/signup">Sign Up</NavLink>

      <BannerSlider />
      <NewProductsSlider />
      
      <Route exact path="/signup">
        <CreateCustomerPage />
      </Route>
    </div>
  )
}

export default App
