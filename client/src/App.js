import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

const App = () => {
  const [count,setCount] = useState(0)

  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User></User>}></Route>
        <Route path='/create' element={<CreateUser></CreateUser>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
