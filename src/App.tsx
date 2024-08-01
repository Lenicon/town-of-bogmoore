import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Doghouse from "./pages/DogHouse"
import Test from "./pages/Test"
import Inventory from "./pages/Inventory"
import Shop from "./pages/Shop"
import Shrine from "./pages/Shrine"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        
        <Route path="/doghouse" element={<Doghouse/>}/>
        <Route path="/shop" element={<Shop/>}/>        
        <Route path="/shrine" element={<Shrine/>}/>        

        <Route path="/test" element={<Test/>}/>
        <Route path="*" element={<Navigate to='/' replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}
