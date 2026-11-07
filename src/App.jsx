import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/landingPage";
import ProductPage from "./pages/ProductPage";
import Steps from "./pages/Steps";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/products" element={<Navigate to="/product" replace />} />
        <Route path="/cart" element={<Steps />} />
        <Route path="/checkout" element={<Navigate to="/cart" replace />} />
        <Route path="/payment" element={<Navigate to="/cart" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
