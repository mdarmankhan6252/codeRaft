import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product/:id" Component={ProductDetails} />
        <Route path="/checkout/:id" Component={Checkout} />
        <Route path="/cart" element={<Cart />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;