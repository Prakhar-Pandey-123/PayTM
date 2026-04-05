import { BrowserRouter, Route,Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Send from "./pages/Send"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={
          <Signup></Signup>
        }></Route>
        <Route path="/login" element={
          <Login></Login>
        }></Route>
        <Route path="/dashboard" element={
          <Dashboard></Dashboard>
        }></Route>
        <Route path="/send" element={
          <Send></Send>
        }></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
