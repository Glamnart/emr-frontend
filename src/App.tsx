// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import SignUp from '@/pages/auth/SignUp'
import Dashboard from '@/pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App