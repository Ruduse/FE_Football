import { useState } from 'react'
import { Routes,Route } from 'react-router'
import './App.css'
import Home from '../components/Home'
import Create from '../components/Create'
import Delete from '../components/Delete'
import Edit from '../components/Edit'

function App() {

  return (
    <>  
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
