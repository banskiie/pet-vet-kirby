import { Routes, Route } from "react-router-dom"
import Landing from "../views/Landing"
import Login from "../views/Login"
import Register from "../views/Register"

export default () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
    </Routes>
  )
}
