// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import SignUp from '@/pages/auth/SignUp'

function App() {
  return (
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  )
}

export default App