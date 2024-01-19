import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Empty from './components/Empty'
import Dashboard from './Pages/Dashboard/Dashboard'
import FavouriteTasks from './Pages/FavouriteTasks/FavouriteTasks'
import CreatedByMe from './Pages/CreatedByMe/CreatedByMe'
import OpenTasks from './Pages/OpenTasks/OpenTasks'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/OpenTasks" element={<OpenTasks />} />
          <Route path="/favTasks" element={<FavouriteTasks />} />
          <Route path="/CreatedByMe" element={<CreatedByMe />} />
          <Route path="*" element={<Empty />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
