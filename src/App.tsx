import './App.css'
import ReferralBuilder from './pages/ReferralBuilder'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ReferralBuilder />} />
      </Routes>
    </>
  )
}

export default App
