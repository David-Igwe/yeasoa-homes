import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Property from "../pages/Property"
import ScrollToTop from "./components/ScrollToTop"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/property/:propertyId" element={<Property />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
