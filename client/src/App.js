import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Empty from './components/Empty'
import Dashboard from './Pages/Dashboard/Dashboard'
import AllTasks from './Pages/AllTasks/AllTasks'
import OpenTasks from './Pages/OpenTasks/OpenTasks'
import HighPrioTasks from './Pages/HighPrioTasks/HighPrioTasks'
import FinishedTasks from './Pages/FinishedTasks/FinishedTasks'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/HighPrioTasks" element={<HighPrioTasks />} />
          <Route path="/OpenTasks" element={<OpenTasks />} />
          <Route path="/AllTasks" element={<AllTasks />} />
          <Route path="/FinishedTasks" element={<FinishedTasks />} />

          <Route path="*" element={<Empty />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
