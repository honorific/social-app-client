import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import {useContext} from 'react'

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<Home />} />,
      <Route path='/login' element={<Login />} />,
      <Route path='/register' element={<Register />} />,
      <Route path='/profile/:username' element={<Profile />} />,
    ]),
  )
  return <RouterProvider router={router} />
}

export default App
