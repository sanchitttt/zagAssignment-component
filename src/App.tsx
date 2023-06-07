import './App.css'
import CardDetails from './CardDetails'
import { Routes, Route } from 'react-router-dom';
import CardAuthentication from './CardAuthentication';
import CardSuccess from './CardSuccess';

function App() {
  return (
    <div className='flex items-start justify-center h-[100vh]'>
      <Routes>
        <Route path='/' element={<CardDetails />} />
        <Route path='/authentication' element={<CardAuthentication />} />
        <Route path='/success' element={<CardSuccess />} />
      </Routes>
    </div>
  )
}

export default App
