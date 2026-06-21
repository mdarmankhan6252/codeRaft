import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


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
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product/:id" Component={ProductDetails} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;