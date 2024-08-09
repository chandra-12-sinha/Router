
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Help from './Components/Help/Help'
import View from './Components/View/View'
import Contact_us from './Components/Contact_Us/Contact_us'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path=',' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route index element={<About/>}/>
    <Route path='Help' element={<Help/>}>
    <Route path='View' element={<View/>}/>
    <Route path='Cantact_Us' element={<Contact_us/>}/>

    </Route>
    </Route>
  ))
  return (
   <RouterProvider router={router}/>
  )
}

export default App
