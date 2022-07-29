import React from 'react'
import {  Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Home, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/exchanges' element={<Exchanges />}/>
              <Route path='/Cryptocurrencies' element={<Cryptocurrencies />}/>
              <Route path='/crypto/:coinId' element={<CryptoDetails />}/>
              <Route path='/news' element={<News />}/>
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default App