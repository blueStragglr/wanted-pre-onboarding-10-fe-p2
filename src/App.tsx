import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JWTLogin from './pages/2-1/JWTLogin'
import JWTLoginWithLocalStorage from './pages/2-2/JWTLoginWithLocalStorage'
import AutoLogin from './pages/2-2/AutoLogin'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <JWTLogin/>,
  },
  {
    path: "/local-storage",
    element: <JWTLoginWithLocalStorage/>,
  },
  {
    path: "/other-page",
    element: <AutoLogin/>,
  },
]);

function App() {
  return (
    <div className="content">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
