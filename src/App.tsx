import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CoinDetails from './pages/CoinDetails'
import ConversionCoin from './pages/ConversionCoin'
import Home from './pages/Home'

const App = () => {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetails />}/>
          <Route path="/conversion" element={<ConversionCoin />}/>
        </Route>
      </Routes>
  )
}

export default App