import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar } from './components'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
    </div>
  )
}

export default App