import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/landingPage";
import ProductPage from "./pages/ProductPage";
import Steps from "./pages/Steps";
import { ShopContextProvider } from "./context/ShopContext";


function App() {
  return (
    <>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Steps />} />
        </Routes>
      </ShopContextProvider >

    </>
  );
}

export default App;
