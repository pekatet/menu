import React from 'react'
import HomePage from './HomePage'
import DriftPage from './DriftPage'
import TimeAttackPage from './TimeAttackPage'
import ForzaPage from './ForzaPage'
import Menu from './Menu'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Routes } from 'react-router'

export default function App() {
  return (
    <Router>
      <Menu/>
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/drift" element={<DriftPage/>} />
          <Route path="/timeattack" element={<TimeAttackPage/>} />
          <Route path='/forza' element={<ForzaPage/>} />
        </Routes>
      </div>
    </Router>
  );
}