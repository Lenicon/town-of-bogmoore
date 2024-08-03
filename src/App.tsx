import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Test from "./pages/Test"
import Inventory from "./pages/Inventory"
import { placesObj } from "./config/townSettings"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        
        {Object.keys(placesObj).filter(t=>!t.startsWith('!')||!t.startsWith('?')).map(key=>(
          <Route key={key} path={key} element={placesObj[key]?.route||<Home/>}/>
        ))}  

        <Route path="/test" element={<Test/>}/>
        <Route path="*" element={<Navigate to='/' replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}
