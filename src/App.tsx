import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import Property from "../pages/Property"
import OrderCreate from "../pages/OrderCreate"
import OrderSummary from "../pages/OrderSummary"
import OrderCheckout from "../pages/OrderCheckout"
import OrderComplete from "../pages/OrderComplete"
import ScrollToTop from "./components/ScrollToTop"
import OrderProvider from "./context/Order/OrderProvider"
import './App.css'

function App() {

  return (
    <OrderProvider>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/property/:propertyId" element={<Property />} />
        <Route path="/order/create" element={<OrderCreate />}>
          <Route index element={<Navigate replace to="summary" />} />
          <Route path="summary" element={<OrderSummary />} />
          <Route path="checkout" element={<OrderCheckout />} />
          <Route path="success" element={<OrderComplete />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </OrderProvider>
  )
}

export default App
