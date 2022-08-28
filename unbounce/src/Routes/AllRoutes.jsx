import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Price from './price'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/price" element={<Price/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
