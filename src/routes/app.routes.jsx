import { Routes, Route } from "react-router-dom"

import { NewDish } from "../pages/NewDish"
import { Home } from "../pages/Home"
import { Menu } from "../pages/Menu"
import { Details } from "../pages/Details"
import { UpdateDish } from "../pages/UpdateDish"


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newDish" element={<NewDish />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/update/:id" element={<UpdateDish />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}