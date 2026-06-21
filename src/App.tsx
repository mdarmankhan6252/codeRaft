import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product/:id" Component={ProductDetails} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;