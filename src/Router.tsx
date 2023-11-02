import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Notfound from './components/Notfound'
import Dashboard from './components/dashboard/Dashboard'
import Addproduct from './components/dashboard/Addproduct'
import Me from './components/Me'

const token: string = localStorage.getItem("token") || " ";
// let isAdmin: boolean = false;
// console.log(token);

// if (token.trim()) {
//   const key = process?.env?.SECRET_KEY || "";
//   const obj = Jwt.verify(token, key) as { isAdmin: boolean };
//   isAdmin = obj.isAdmin || false;
// }

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/error404' element={<Notfound />} />
        <Route path='/*' element={<Navigate to="/error404" />} />
        <Route path='/dashboard' element={token.trim() ? <Dashboard /> : <Navigate to={'/'}/>} />
        <Route path='/dashboard/:id' element={<Addproduct />} />
        <Route path='/me' element={token.trim() ? <Me /> : <Navigate to={'/signin'} />} />
      </Routes>
    </div>
  )
}
