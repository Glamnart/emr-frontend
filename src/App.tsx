// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import SignUp from '@/pages/auth/SignUp'
import Appointments from '@/pages/auth/Appointments'

function App() {
  return (
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Appointments" element={<Appointments />} />
    </Routes>
  )
}

export default App