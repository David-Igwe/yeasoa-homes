import { Outlet } from "react-router-dom"

import TopNav from "../src/components/TopNav";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Footer from "../src/components/Footer";
import OrderProgress from "../src/components/OrderProgress";


export default function OrderCreate() {
  return (
    <>
        <TopNav />
        <Navbar />
        <Hero heading="Payment & Contact Info" image="/img/property3.jpg" />
        <OrderProgress />
        <Outlet />
        <Footer />
    </>
  )
}
