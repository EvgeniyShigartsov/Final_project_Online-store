import React from 'react'
import {ThemeProvider} from 'styled-components'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {AboutUsPage} from './pages/About-us/AboutUs'
import * as theme from './pages/About-us/theme'

function App() {
  return (
    <div>
      <BannerSlider />
      <ThemeProvider theme={theme}><AboutUsPage /></ThemeProvider>
    </div>
  )
}

export default App
