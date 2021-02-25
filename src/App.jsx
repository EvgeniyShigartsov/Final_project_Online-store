import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {AboutUsPage} from './pages/About-us/AboutUs'

function App() {
  return (
    <div>
      <BannerSlider />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <Route exact path="/aboutus">
        <AboutUsPage />
      </Route>
      <Route exact path="/" />
    </div>
  )
}

export default App
