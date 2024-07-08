import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import Steps from "./pages/Steps";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Steps />} />
      </Routes>
    </>
  );
}

export default App;
