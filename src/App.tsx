import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Doghouse from "./pages/DogHouse"
import DoghouseOld from "./pages/DoghouseOld"
import Test from "./pages/Test"
import Inventory from "./pages/Inventory"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory" element={<Inventory/>}/>

        <Route path="/doghouse" element={<Doghouse/>}/>
        <Route path="/doghouse_old" element={<DoghouseOld/>}/>

        <Route path="/test" element={<Test/>}/>
        <Route path="*" element={<Navigate to='/' replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}
