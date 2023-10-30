import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Notfound from './components/Notfound'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/error404' element={<Notfound />} />
        <Route path='/*' element={<Navigate to="/error404" />} />
      </Routes>
    </div>
  )
}
