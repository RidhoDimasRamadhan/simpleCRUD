import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import CreateUser from './create'

import User from './user'
import Update from './update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/createUser' element={<CreateUser/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
    
  </BrowserRouter>
    </>
  )
}

export default App
