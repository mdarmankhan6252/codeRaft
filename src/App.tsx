import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product/:id" Component={ProductDetails} />

      </Routes>

    </>
  );
};

export default App;